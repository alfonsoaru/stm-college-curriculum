
import React, { useState } from 'react';
import { Subject, YearGroup, AppState } from './types';
import { SUBJECTS, GENRES, CURRICULUM_TOPICS } from './constants';
import { generateSong } from './services/geminiService';

const App: React.FC = () => {
  const [state, setState] = useState<AppState>({
    subject: 'Science',
    year: 'Year 7',
    topic: '',
    genre: 'K-Pop',
    loading: false,
    result: null,
    error: null
  });

  const [customGenre, setCustomGenre] = useState('');

  const handleGenerate = async () => {
    if (!state.topic) {
      setState(prev => ({ ...prev, error: 'Please enter or select a topic first!' }));
      return;
    }

    setState(prev => ({ ...prev, loading: true, error: null, result: null }));

    const finalGenre = customGenre.trim() || state.genre;

    try {
      const result = await generateSong(
        state.subject,
        state.year,
        state.topic,
        finalGenre
      );
      setState(prev => ({ ...prev, result, loading: false }));
    } catch (err) {
      console.error(err);
      setState(prev => ({ ...prev, error: 'Failed to generate song. Please try again.', loading: false }));
    }
  };

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    alert(`${label} copied to clipboard!`);
  };

  const getFullLyricsText = () => {
    if (!state.result) return '';
    return state.result.lyrics.map(l => `[${l.section}]\n${l.content}`).join('\n\n');
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 pb-20">
      <header className="bg-indigo-700 text-white py-8 px-4 shadow-lg mb-8">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="bg-white p-2 rounded-xl text-indigo-700 text-2xl shadow-inner">
              <i className="fas fa-music"></i>
            </div>
            <div>
              <h1 className="text-3xl font-extrabold tracking-tight">EduSong UK</h1>
              <p className="text-indigo-100 font-medium">KS3 Educational AI Lyric Studio</p>
            </div>
          </div>
          <div className="flex items-center gap-2 bg-indigo-600 px-4 py-2 rounded-full text-sm font-semibold border border-indigo-400">
            <i className="fas fa-graduation-cap"></i>
            <span>Curriculum Aligned</span>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-12 gap-8">
        <section className="lg:col-span-5 space-y-6">
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 sticky top-8">
            <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
              <i className="fas fa-sliders text-indigo-500"></i>
              Song Settings
            </h2>

            <div className="mb-6">
              <label className="block text-sm font-bold text-slate-700 mb-2 uppercase tracking-wider text-[10px]">Year Group</label>
              <div className="flex p-1 bg-slate-100 rounded-lg">
                {(['Year 7', 'Year 8'] as YearGroup[]).map((y) => (
                  <button
                    key={y}
                    onClick={() => setState(prev => ({ ...prev, year: y, topic: '' }))}
                    className={`flex-1 py-2 text-sm font-bold rounded-md transition-all ${
                      state.year === y 
                        ? 'bg-white text-indigo-700 shadow-sm' 
                        : 'text-slate-500 hover:text-slate-700'
                    }`}
                  >
                    {y}
                  </button>
                ))}
              </div>
            </div>

            <div className="mb-6">
              <label className="block text-sm font-bold text-slate-700 mb-2 uppercase tracking-wider text-[10px]">Subject</label>
              <select
                value={state.subject}
                onChange={(e) => setState(prev => ({ ...prev, subject: e.target.value as Subject, topic: '' }))}
                className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-2.5 font-medium focus:ring-2 focus:ring-indigo-500 outline-none transition-all"
              >
                {SUBJECTS.map(s => <option key={s} value={s}>{s}</option>)}
              </select>
            </div>

            <div className="mb-6">
              <label className="block text-sm font-bold text-slate-700 mb-2 uppercase tracking-wider text-[10px]">Specific Topic</label>
              <div className="space-y-3">
                <input
                  type="text"
                  placeholder="e.g. Photosynthesis..."
                  value={state.topic}
                  onChange={(e) => setState(prev => ({ ...prev, topic: e.target.value }))}
                  className="w-full bg-white border border-slate-200 rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-indigo-500 outline-none"
                />
                
                <div className="flex flex-wrap gap-2 max-h-32 overflow-y-auto pr-1">
                  {(CURRICULUM_TOPICS[state.year][state.subject] || []).map(suggestion => (
                    <button
                      key={suggestion}
                      onClick={() => setState(prev => ({ ...prev, topic: suggestion }))}
                      className="text-[10px] px-2 py-1 bg-indigo-50 text-indigo-600 rounded-full border border-indigo-100 hover:bg-indigo-100 transition-colors"
                    >
                      {suggestion}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="mb-6">
              <label className="block text-sm font-bold text-slate-700 mb-2 uppercase tracking-wider text-[10px]">Style Selection</label>
              <div className="grid grid-cols-2 gap-2 mb-3">
                {GENRES.map(g => (
                  <button
                    key={g.id}
                    onClick={() => {
                      setState(prev => ({ ...prev, genre: g.name }));
                      setCustomGenre('');
                    }}
                    className={`flex flex-col items-center justify-center p-2.5 rounded-xl border-2 transition-all ${
                      state.genre === g.name && !customGenre
                        ? 'border-indigo-500 bg-indigo-50 text-indigo-700' 
                        : 'border-slate-100 bg-slate-50 text-slate-500 hover:border-slate-200'
                    }`}
                  >
                    <span className="text-lg mb-0.5">{g.icon}</span>
                    <span className="text-[10px] font-bold leading-tight">{g.name}</span>
                  </button>
                ))}
              </div>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Or type custom style (e.g. Synth-wave Jazz)..."
                  value={customGenre}
                  onChange={(e) => setCustomGenre(e.target.value)}
                  className="w-full bg-white border border-slate-200 rounded-lg px-4 py-2.5 text-sm focus:ring-2 focus:ring-indigo-500 outline-none"
                />
              </div>
            </div>

            <button
              onClick={handleGenerate}
              disabled={state.loading}
              className={`w-full py-4 rounded-xl font-bold text-white shadow-lg transition-all flex items-center justify-center gap-2 ${
                state.loading 
                  ? 'bg-slate-400 cursor-not-allowed' 
                  : 'bg-indigo-600 hover:bg-indigo-700 active:scale-95'
              }`}
            >
              {state.loading ? (
                <>
                  <i className="fas fa-spinner fa-spin"></i>
                  Composing...
                </>
              ) : (
                <>
                  <i className="fas fa-wand-magic-sparkles"></i>
                  Generate Track
                </>
              )}
            </button>
            {state.error && <p className="mt-4 text-red-500 text-xs font-medium text-center">{state.error}</p>}
          </div>
        </section>

        <section className="lg:col-span-7">
          {!state.result && !state.loading && (
            <div className="bg-white border-2 border-dashed border-slate-200 rounded-3xl p-12 flex flex-col items-center justify-center text-center opacity-70 h-full min-h-[500px]">
              <div className="w-20 h-20 bg-slate-50 rounded-full flex items-center justify-center mb-6">
                <i className="fas fa-headphones text-slate-300 text-3xl"></i>
              </div>
              <h3 className="text-xl font-bold text-slate-500 mb-2">Lyric Sheet</h3>
              <p className="text-slate-400 max-w-xs">Your curriculum-aligned track with metaphorical depth will appear here.</p>
            </div>
          )}

          {state.loading && (
            <div className="bg-white rounded-3xl p-8 shadow-sm border border-slate-200 h-full min-h-[500px] flex flex-col items-center justify-center text-center">
              <div className="relative mb-8">
                <div className="w-16 h-16 border-4 border-indigo-100 border-t-indigo-600 rounded-full animate-spin"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <i className="fas fa-pen-nib text-indigo-600"></i>
                </div>
              </div>
              <h3 className="text-xl font-bold text-indigo-900 mb-2">Drafting the demo...</h3>
              <p className="text-slate-500 animate-pulse italic">Converting {state.topic} into a lyrical metaphor...</p>
            </div>
          )}

          {state.result && (
            <div className="bg-white rounded-3xl shadow-xl overflow-hidden animate-fadeIn border border-slate-200">
              {/* Header with main copy button */}
              <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-indigo-950 p-8 text-white">
                <div className="flex justify-between items-start mb-4">
                  <span className="px-3 py-1 bg-indigo-500/30 rounded-full text-[10px] font-bold uppercase tracking-widest border border-indigo-400/30">
                    {state.year} • {state.subject}
                  </span>
                  <div className="flex gap-2">
                    <button 
                      onClick={() => copyToClipboard(getFullLyricsText(), 'Full Lyrics Sheet')}
                      className="flex items-center gap-2 px-3 py-1.5 bg-white/10 hover:bg-white/20 rounded-lg transition-colors border border-white/10 text-[10px] font-bold uppercase tracking-tighter"
                      title="Copy Full Document"
                    >
                      <i className="fas fa-copy"></i>
                      Copy Full
                    </button>
                  </div>
                </div>
                <h2 className="text-3xl font-black mb-3 leading-tight tracking-tight">{state.result.title}</h2>
                <div className="flex items-start gap-3 text-indigo-100/80 text-sm bg-black/20 p-3 rounded-xl border border-white/5">
                  <i className="fas fa-lightbulb mt-0.5 text-indigo-400"></i>
                  <p className="leading-relaxed"><span className="font-bold text-white">Curriculum Link:</span> {state.result.educationalFocus}</p>
                </div>
              </div>

              {/* AI Prompt Section */}
              <div className="p-6 bg-indigo-50/50 border-b border-indigo-100/50">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2 text-indigo-700 font-bold text-xs uppercase tracking-widest">
                    <i className="fas fa-sliders"></i>
                    AI Music Prompt
                  </div>
                  <button 
                    onClick={() => copyToClipboard(state.result?.aiStylePrompt || '', 'AI Prompt')}
                    className="text-[10px] uppercase tracking-tighter text-indigo-700 hover:bg-indigo-100 font-black bg-white border border-indigo-200 px-3 py-1.5 rounded-lg shadow-sm transition-all"
                  >
                    Copy for Suno
                  </button>
                </div>
                <div className="bg-white p-4 rounded-xl border border-indigo-200/50 text-sm font-mono text-slate-600 leading-relaxed italic">
                  &quot;{state.result.aiStylePrompt}&quot;
                </div>
              </div>

              {/* Lyrics Content with its own copy button */}
              <div className="bg-white">
                <div className="px-8 pt-8 pb-4 border-b border-slate-50 flex justify-between items-center">
                  <div className="flex items-center gap-2 text-slate-400 font-black text-[10px] uppercase tracking-[0.2em]">
                    <i className="fas fa-microphone-alt"></i>
                    Lyric Content
                  </div>
                  <button 
                    onClick={() => copyToClipboard(getFullLyricsText(), 'Lyrics')}
                    className="flex items-center gap-2 px-3 py-1.5 text-indigo-600 hover:bg-indigo-50 border border-indigo-100 rounded-lg transition-all text-[10px] font-bold uppercase tracking-tighter"
                  >
                    <i className="fas fa-copy"></i>
                    Copy Lyrics
                  </button>
                </div>
                
                <div className="p-10">
                  <div className="max-w-prose mx-auto space-y-12">
                    {state.result.lyrics.map((part, idx) => (
                      <div key={idx} className="relative group">
                        <div className="text-[10px] font-black text-indigo-400 uppercase tracking-[0.3em] mb-4 flex items-center gap-3">
                          <span>[{part.section}]</span>
                          <div className="h-px flex-1 bg-slate-50 group-hover:bg-indigo-50 transition-colors"></div>
                        </div>
                        <div className="pl-4 border-l-2 border-slate-50 group-hover:border-indigo-200 transition-colors">
                          <p className="whitespace-pre-line text-lg text-slate-800 leading-relaxed font-medium tracking-tight">
                            {part.content}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="p-8 bg-slate-50 text-center border-t border-slate-100">
                <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">
                  EduSong Studio • Metaphorical Track • {new Date().getFullYear()}
                </p>
              </div>
            </div>
          )}
        </section>
      </main>
    </div>
  );
};

export default App;
