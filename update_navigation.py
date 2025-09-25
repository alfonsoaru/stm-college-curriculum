#!/usr/bin/env python3
"""
Script to update navigation across subject pages
"""

import os
import re

def update_navigation_in_file(filepath):
    """Update navigation in a single file"""
    try:
        with open(filepath, 'r', encoding='utf-8') as f:
            content = f.read()

        # Pattern to match existing nav sections
        patterns = [
            r'<nav class="nav">.*?</nav>',
            r'<nav class="nav">.*?</nav>\s*',
        ]

        # Replace with iframe navigation
        iframe_nav = '''<iframe src="../shared-nav.html"
            style="width: 100%; height: 70px; border: none; position: sticky; top: 0; z-index: 1000; background: white;">
    </iframe>'''

        updated = False
        for pattern in patterns:
            if re.search(pattern, content, re.DOTALL):
                content = re.sub(pattern, iframe_nav, content, flags=re.DOTALL)
                updated = True
                break

        if updated:
            with open(filepath, 'w', encoding='utf-8') as f:
                f.write(content)
            print(f"Updated: {filepath}")
            return True
        else:
            print(f"No nav found in: {filepath}")
            return False

    except Exception as e:
        print(f"Error updating {filepath}: {e}")
        return False

def main():
    subjects_dir = "C:/dev/stm/subjects"

    # Key subject files to update
    priority_files = [
        "english.html",
        "science.html",
        "computer-science.html",
        "french.html",
        "german.html",
        "history.html",
        "geography.html"
    ]

    print("Updating navigation across subject pages...")

    updated_count = 0
    for filename in priority_files:
        filepath = os.path.join(subjects_dir, filename)
        if os.path.exists(filepath):
            if update_navigation_in_file(filepath):
                updated_count += 1
        else:
            print(f"File not found: {filepath}")

    print(f"\nUpdated {updated_count} files with new navigation")

if __name__ == "__main__":
    main()