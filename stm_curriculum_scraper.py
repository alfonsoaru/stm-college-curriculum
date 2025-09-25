#!/usr/bin/env python3
"""
STM College Curriculum Document Scraper
Downloads curriculum documents from stmcollege.org.uk
"""

import requests
import os
import re
from urllib.parse import urljoin, urlparse
from bs4 import BeautifulSoup
import time

class STMCurriculumScraper:
    def __init__(self):
        self.base_url = "https://www.stmcollege.org.uk"
        self.session = requests.Session()
        self.session.headers.update({
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
        })
        
        # Subject URLs found from overview page
        self.subjects = [
            "/curriculum/overview",  # Added overview page for general curriculum docs
            "/curriculum/art",
            "/curriculum/british-values", 
            "/curriculum/computer-science-enterprise-and-media",
            "/curriculum/cpshe",
            "/curriculum/design-and-technology",
            "/curriculum/drama",
            "/curriculum/english",
            "/curriculum/extra-curricular-activities",
            "/curriculum/geography",
            "/curriculum/health-and-social-care",
            "/curriculum/history",
            "/curriculum/mathematics",
            "/curriculum/mfl",
            "/curriculum/music",
            "/curriculum/pe",
            "/curriculum/re",
            "/curriculum/science"
        ]
        
        # Create download directory
        self.download_dir = "stm_curriculum_downloads"
        os.makedirs(self.download_dir, exist_ok=True)

    def fetch_page(self, url):
        """Fetch a web page with error handling"""
        try:
            response = self.session.get(url, timeout=30)
            response.raise_for_status()
            return response.text
        except Exception as e:
            print(f"Error fetching {url}: {e}")
            return None

    def find_curriculum_documents(self, html_content, subject_url):
        """Find curriculum documents on a subject page"""
        soup = BeautifulSoup(html_content, 'html.parser')
        documents = []
        
        # Find all PDF links - be more permissive since some have empty link text
        for link in soup.find_all('a', href=True):
            href = link.get('href')
            text = link.get_text().strip()
            
            # Check if link points to PDF
            if href.endswith('.pdf'):
                # Get the filename to check for curriculum keywords
                filename = os.path.basename(urlparse(href).path).lower()
                
                # Include PDFs that contain curriculum-related words in filename or text
                curriculum_words = [
                    'curriculum', 'arrow', 'overview', 'assessment', 'plan', 'subject',
                    'year', 'ks3', 'key stage', 'big picture', 'scheme', 'information',
                    'policy', 'intent', 'implementation', 'impact', 'progression'
                ]
                
                if any(word in filename for word in curriculum_words) or any(word in text.lower() for word in curriculum_words):
                    full_url = urljoin(self.base_url, href)
                    documents.append({
                        'url': full_url,
                        'filename': os.path.basename(urlparse(href).path),
                        'link_text': text if text else filename
                    })
        
        # Also look for images that might be curriculum arrows
        for img in soup.find_all('img', src=True):
            src = img.get('src')
            alt = img.get('alt', '').lower()
            
            if any(word in alt for word in ['curriculum', 'arrow', 'overview']):
                if src.endswith(('.png', '.jpg', '.jpeg', '.gif')):
                    full_url = urljoin(self.base_url, src)
                    documents.append({
                        'url': full_url,
                        'filename': os.path.basename(urlparse(src).path),
                        'link_text': f"Image: {alt}"
                    })
        
        return documents

    def download_file(self, url, filename, subject_name):
        """Download a file using requests"""
        try:
            response = self.session.get(url, timeout=30)
            response.raise_for_status()
            
            # Create subject directory
            subject_dir = os.path.join(self.download_dir, subject_name)
            os.makedirs(subject_dir, exist_ok=True)
            
            # Save file
            filepath = os.path.join(subject_dir, filename)
            with open(filepath, 'wb') as f:
                f.write(response.content)
            
            print(f"Downloaded: {filepath}")
            return True
        except Exception as e:
            print(f"Error downloading {url}: {e}")
            return False

    def scrape_all_subjects(self):
        """Main scraping function"""
        print("Starting STM College curriculum document scraping...")
        print(f"Found {len(self.subjects)} subjects to process")
        
        total_downloads = 0
        
        for subject_path in self.subjects:
            subject_name = subject_path.split('/')[-1].replace('-', '_')
            subject_url = urljoin(self.base_url, subject_path)
            
            print(f"\nProcessing: {subject_name} ({subject_url})")
            
            # Fetch subject page
            html_content = self.fetch_page(subject_url)
            if not html_content:
                continue
                
            # Find documents
            documents = self.find_curriculum_documents(html_content, subject_url)
            
            if not documents:
                print(f"No curriculum documents found for {subject_name}")
                continue
                
            print(f"Found {len(documents)} documents for {subject_name}")
            
            # Download each document
            for doc in documents:
                print(f"  Downloading: {doc['link_text']} -> {doc['filename']}")
                if self.download_file(doc['url'], doc['filename'], subject_name):
                    total_downloads += 1
                
                # Be respectful - small delay between downloads
                time.sleep(1)
            
            # Longer delay between subjects
            time.sleep(2)
        
        print(f"\nScraping complete! Downloaded {total_downloads} files to {self.download_dir}/")

if __name__ == "__main__":
    scraper = STMCurriculumScraper()
    scraper.scrape_all_subjects()