import React, { useState, useEffect } from 'react';
import { Download, Play, Check, Star, Circle, Plus, Youtube, BookOpen, ChevronDown, ChevronUp, Search, Moon, Sun, SlidersHorizontal, MessageSquare, Upload, Trash2 } from 'lucide-react';

const GameChecklist = () => {
  const initialGames = [
    // Tier S - MUST PLAY
    { id: 1, name: "Batman: Arkham City", genre: "Action-Adventure", fps: "45-60", tier: "S", priority: "HIGH", trailer: "https://www.youtube.com/watch?v=9pnK8akbd2M", desc: "Become the Dark Knight in an open-world Gotham prison.", hours: "12-15", icon: "🦇" },
    { id: 2, name: "Deus Ex: Human Revolution", genre: "RPG/Stealth", fps: "50-60", tier: "S", priority: "HIGH", trailer: "https://www.youtube.com/watch?v=Kq5KWLqUewc", desc: "Cyberpunk RPG where your choices matter.", hours: "20-25", icon: "🤖" },
    { id: 3, name: "The Witcher 2", genre: "Fantasy RPG", fps: "40-50", tier: "S", priority: "HIGH", trailer: "https://www.youtube.com/watch?v=YJ_KFwNLpl0", desc: "Hunt monsters as Geralt in this dark fantasy.", hours: "25-30", icon: "⚔️" },
    { id: 4, name: "Spec Ops: The Line", genre: "Third-Person Shooter", fps: "50-60", tier: "S", priority: "HIGH", trailer: "https://www.youtube.com/watch?v=3uUsdBfG6o0", desc: "Military shooter exploring war's psychological horrors.", hours: "6-8", icon: "🎖️" },
    { id: 5, name: "Metro: Last Light Redux", genre: "FPS/Horror", fps: "35-45", tier: "S", priority: "HIGH", trailer: "https://www.youtube.com/watch?v=8jcIYP8LpxA", desc: "Survive post-apocalyptic Moscow metro tunnels.", hours: "10-12", icon: "🚇" },
    { id: 6, name: "Dishonored", genre: "Stealth/Action", fps: "50-60", tier: "S", priority: "HIGH", trailer: "https://www.youtube.com/watch?v=E1HlYTukh9A", desc: "Supernatural assassin with choice-based gameplay.", hours: "12-15", icon: "🗡️" },
    { id: 7, name: "Tomb Raider (2013)", genre: "Action-Adventure", fps: "45-55", tier: "S", priority: "HIGH", trailer: "https://www.youtube.com/watch?v=xCe8-1dbXZc", desc: "Lara Croft's origin story on a dangerous island.", hours: "11-14", icon: "🏹" },
    { id: 43, name: "Mass Effect (Legendary)", genre: "Sci-Fi RPG", fps: "40-50", tier: "S", priority: "HIGH", trailer: "https://www.youtube.com/watch?v=n8i53TtQ6IQ", desc: "Command Shepard and save the galaxy.", hours: "17-20", icon: "🚀" },
    { id: 44, name: "Mass Effect 2 (Legendary)", genre: "Sci-Fi RPG", fps: "45-55", tier: "S", priority: "HIGH", trailer: "https://www.youtube.com/watch?v=lx9sPQpjgjU", desc: "Assemble a team for a suicide mission.", hours: "24-30", icon: "🚀" },
    { id: 45, name: "Mass Effect 3 (Legendary)", genre: "Sci-Fi RPG", fps: "40-50", tier: "S", priority: "HIGH", trailer: "https://www.youtube.com/watch?v=eBktyyaV9LY", desc: "Final battle against the Reapers.", hours: "24-30", icon: "🚀" },
    
    // Tier A - EXCELLENT
    { id: 8, name: "Batman: Arkham Knight", genre: "Action-Adventure", fps: "25-35", tier: "A", priority: "MEDIUM-HIGH", trailer: "https://www.youtube.com/watch?v=wsf78BS9VE0", desc: "Epic conclusion with the Batmobile.", hours: "15-18", icon: "🦇" },
    { id: 9, name: "Batman: Arkham Asylum", genre: "Action-Adventure", fps: "50-60", tier: "A", priority: "MEDIUM-HIGH", trailer: "https://www.youtube.com/watch?v=T8bu2Y4o8xU", desc: "Batman trapped in Arkham Asylum.", hours: "8-10", icon: "🦇" },
    { id: 10, name: "Batman: Arkham Origins", genre: "Action-Adventure", fps: "40-50", tier: "A", priority: "MEDIUM-HIGH", trailer: "https://www.youtube.com/watch?v=JRAR6TQh3j0", desc: "Younger Batman faces assassins.", hours: "10-12", icon: "🦇" },
    { id: 11, name: "Far Cry 3", genre: "FPS/Open World", fps: "40-50", tier: "A", priority: "MEDIUM-HIGH", trailer: "https://www.youtube.com/watch?v=ybdiu8iGsZg", desc: "Survive tropical island with insane Vaas.", hours: "15-20", icon: "🏝️" },
    { id: 12, name: "Far Cry 4", genre: "FPS/Open World", fps: "35-45", tier: "A", priority: "MEDIUM-HIGH", trailer: "https://www.youtube.com/watch?v=NPlrh56fByE", desc: "Liberate Kyrat from Pagan Min.", hours: "16-22", icon: "🏔️" },
    { id: 13, name: "BioShock Infinite", genre: "FPS", fps: "40-50", tier: "A", priority: "MEDIUM-HIGH", trailer: "https://www.youtube.com/watch?v=kv4gN4mBl_k", desc: "Explore floating city Columbia.", hours: "11-14", icon: "☁️" },
    { id: 14, name: "Alan Wake", genre: "Third-Person Horror", fps: "45-55", tier: "A", priority: "MEDIUM-HIGH", trailer: "https://www.youtube.com/watch?v=uz4_2p-OUVg", desc: "Writer battles darkness come to life.", hours: "10-12", icon: "📚" },
    { id: 15, name: "Mafia II: Definitive", genre: "Action-Adventure", fps: "30-40", tier: "A", priority: "MEDIUM-HIGH", trailer: "https://www.youtube.com/watch?v=7Q1lEjAM-Lw", desc: "Rise through 1940s-50s mob ranks.", hours: "10-12", icon: "🤵" },
    { id: 16, name: "Prey (2017)", genre: "Immersive Sim", fps: "30-35", tier: "A", priority: "MEDIUM-HIGH", trailer: "https://www.youtube.com/watch?v=LNHZ9WAcYJA", desc: "Fight aliens on Talos I space station.", hours: "16-20", icon: "👽" },
    { id: 17, name: "Wolfenstein: New Order", genre: "FPS", fps: "45-55", tier: "A", priority: "MEDIUM-HIGH", trailer: "https://www.youtube.com/watch?v=m-Zvn4hQWiM", desc: "Fight Nazis in alternate 1960s.", hours: "10-12", icon: "🔫" },
    { id: 18, name: "Rise of Tomb Raider", genre: "Action-Adventure", fps: "30-40", tier: "A", priority: "MEDIUM-HIGH", trailer: "https://www.youtube.com/watch?v=qqpb5rBtsas", desc: "Lara explores Siberia for immortality.", hours: "13-18", icon: "🏹" },
    { id: 19, name: "Metro 2033 Redux", genre: "FPS/Horror", fps: "30-40", tier: "A", priority: "MEDIUM-HIGH", trailer: "https://www.youtube.com/watch?v=K_nwC7ygQv8", desc: "First chapter in Moscow metro.", hours: "8-10", icon: "🚇" },
    { id: 20, name: "Doom (2016)", genre: "FPS", fps: "45-55", tier: "A", priority: "MEDIUM-HIGH", trailer: "https://www.youtube.com/watch?v=NteAPGprDJk", desc: "Rip and tear through demons.", hours: "11-13", icon: "😈" },
    { id: 46, name: "Warhammer 40K: Space Marine", genre: "Third-Person Action", fps: "50-60", tier: "A", priority: "MEDIUM-HIGH", trailer: "https://www.youtube.com/watch?v=nb50aAFiOpM", desc: "Battle Orks as an Ultramarine.", hours: "7-9", icon: "⚔️" },
    { id: 47, name: "Hades II", genre: "Roguelike", fps: "45-55", tier: "A", priority: "MEDIUM-HIGH", trailer: "https://www.youtube.com/watch?v=CmxOutSzAAA", desc: "Fight through Underworld as Melinoë.", hours: "20-30", icon: "🔱" },
    
    // Tier B - WORTH IT
    { id: 21, name: "A Plague Tale: Innocence", genre: "Action-Adventure", fps: "25-30", tier: "B", priority: "MEDIUM", trailer: "https://www.youtube.com/watch?v=AsLvPl67nkg", desc: "Siblings through plague-ridden France.", hours: "10-12", icon: "🐀" },
    { id: 22, name: "Hellblade: Senua's Sacrifice", genre: "Action/Psychological", fps: "30-35", tier: "B", priority: "MEDIUM", trailer: "https://www.youtube.com/watch?v=fBJ0ifuhk-w", desc: "Experience psychosis through Senua.", hours: "7-9", icon: "⚔️" },
    { id: 23, name: "Control", genre: "Action/Supernatural", fps: "20-25", tier: "B", priority: "MEDIUM", trailer: "https://www.youtube.com/watch?v=PT5ysTZ00KE", desc: "Explore supernatural brutalist building.", hours: "11-15", icon: "🏢" },
    { id: 24, name: "Deus Ex: Mankind Divided", genre: "RPG/Stealth", fps: "25-30", tier: "B", priority: "MEDIUM", trailer: "https://www.youtube.com/watch?v=uvSs5b6y-YM", desc: "Adam Jensen in divided world.", hours: "16-20", icon: "🤖" },
    { id: 25, name: "Assassin's Creed Origins", genre: "Open World RPG", fps: "20-30", tier: "B", priority: "MEDIUM", trailer: "https://www.youtube.com/watch?v=cUuKIpCM2o0", desc: "Origin of Assassins in ancient Egypt.", hours: "30-40", icon: "🏜️" },
    { id: 26, name: "GTA V", genre: "Open World Action", fps: "20-25", tier: "B", priority: "MEDIUM", trailer: "https://www.youtube.com/watch?v=QkkoHAzjnUs", desc: "Three criminals in Los Santos.", hours: "31-35", icon: "🚗" },
    { id: 27, name: "Quantum Break", genre: "Action/Sci-Fi", fps: "25-30", tier: "B", priority: "MEDIUM", trailer: "https://www.youtube.com/watch?v=wkXvKDN6z4k", desc: "Manipulate time in cinematic game.", hours: "10-12", icon: "⏰" },
    { id: 28, name: "Dishonored 2", genre: "Stealth/Action", fps: "30-40", tier: "B", priority: "MEDIUM", trailer: "https://www.youtube.com/watch?v=UnsDyv-TtJg", desc: "Play as Emily or Corvo.", hours: "12-16", icon: "🗡️" },
    { id: 29, name: "Shadow of Mordor", genre: "Action-Adventure", fps: "35-45", tier: "B", priority: "MEDIUM", trailer: "https://www.youtube.com/watch?v=Z9w7TaHcXdQ", desc: "Hunt Orcs with Nemesis system.", hours: "15-20", icon: "💍" },
    { id: 30, name: "Resident Evil 2 Remake", genre: "Horror", fps: "30-35", tier: "B", priority: "MEDIUM", trailer: "https://www.youtube.com/watch?v=u3wS-Q2KBpk", desc: "Survive Raccoon City outbreak.", hours: "8-10", icon: "🧟" },
    
    // Tier C - CLASSICS
    { id: 31, name: "Sleeping Dogs", genre: "Open World Action", fps: "40-50", tier: "C", priority: "LOW-MEDIUM", status: "completed", trailer: "https://www.youtube.com/watch?v=virg-5zeC0M", desc: "Undercover in Hong Kong triads.", hours: "15-20", icon: "🐉" },
    { id: 32, name: "Max Payne 3", genre: "Third-Person Shooter", fps: "40-50", tier: "C", priority: "LOW-MEDIUM", trailer: "https://www.youtube.com/watch?v=5MqFhlyGg1U", desc: "Max's final chapter in São Paulo.", hours: "8-10", icon: "🔫" },
    { id: 33, name: "Saints Row: The Third", genre: "Open World Action", fps: "50-60", tier: "C", priority: "LOW-MEDIUM", trailer: "https://www.youtube.com/watch?v=UQ1f5MFWG9E", desc: "Over-the-top gang warfare.", hours: "16-20", icon: "💜" },
    { id: 34, name: "Just Cause 2", genre: "Open World Action", fps: "45-55", tier: "C", priority: "LOW-MEDIUM", trailer: "https://www.youtube.com/watch?v=o_h27xsFNGI", desc: "Grapple across tropical island.", hours: "17-22", icon: "🪂" },
    { id: 35, name: "Enslaved: Odyssey West", genre: "Action-Adventure", fps: "50-60", tier: "C", priority: "LOW-MEDIUM", trailer: "https://www.youtube.com/watch?v=H2VQc2hCGHw", desc: "Post-apocalyptic Journey to West.", hours: "9-11", icon: "🐒" },
    { id: 36, name: "Remember Me", genre: "Action/Sci-Fi", fps: "40-50", tier: "C", priority: "LOW-MEDIUM", trailer: "https://www.youtube.com/watch?v=LfFcXL24wok", desc: "Hack memories in Neo-Paris.", hours: "9-11", icon: "🧠" },
    { id: 37, name: "Splinter Cell: Blacklist", genre: "Stealth/Action", fps: "35-45", tier: "C", priority: "LOW-MEDIUM", trailer: "https://www.youtube.com/watch?v=coe_W9mKmig", desc: "Sam Fisher stops terrorists.", hours: "11-15", icon: "🕵️" },
    { id: 38, name: "L.A. Noire", genre: "Detective", fps: "40-50", tier: "C", priority: "LOW-MEDIUM", trailer: "https://www.youtube.com/watch?v=T0z5UVqMWkg", desc: "Solve crimes in 1940s LA.", hours: "19-25", icon: "🕵️" },
    
    // Racing
    { id: 39, name: "NFS: Hot Pursuit Remastered", genre: "Racing", fps: "50-60", tier: "R", priority: "OPTIONAL", trailer: "https://www.youtube.com/watch?v=qLRy0DjT9J4", desc: "High-speed police chases.", hours: "8-12", icon: "🏎️" },
    { id: 40, name: "GRID 2", genre: "Racing", fps: "50-60", tier: "R", priority: "OPTIONAL", trailer: "https://www.youtube.com/watch?v=KsI1NV6hoDk", desc: "Arcade-sim racing balance.", hours: "10-15", icon: "🏁" },
    { id: 41, name: "NFS: Most Wanted 2012", genre: "Racing", fps: "45-55", tier: "R", priority: "OPTIONAL", trailer: "https://www.youtube.com/watch?v=T9qFNL6zLzw", desc: "Become most wanted racer.", hours: "10-15", icon: "🚗" },
    { id: 42, name: "NFS: Payback", genre: "Racing", fps: "30-40", tier: "R", priority: "OPTIONAL", trailer: "https://www.youtube.com/watch?v=ItWBWNO8tHU", desc: "Revenge on the cartel.", hours: "15-20", icon: "🚘" },
    { id: 48, name: "The Crew", genre: "Racing", fps: "35-45", tier: "R", priority: "OPTIONAL", trailer: "https://www.youtube.com/watch?v=k9TcSHzEsqQ", desc: "Drive across entire USA.", hours: "20-30", icon: "🗺️" },
  ];

  const [games, setGames] = useState(() => {
    const saved = localStorage.getItem('gameChecklistData');
    if (saved) {
      try {
        const savedGames = JSON.parse(saved);
        const merged = initialGames.map(g => {
          const saved = savedGames.find(s => s.id === g.id);
          return saved ? {...g, status: saved.status, rating: saved.rating, notes: saved.notes, tags: saved.tags} : {...g, status: g.status || 'not_downloaded'};
        });
        const newCustom = savedGames.filter(s => !initialGames.find(i => i.id === s.id));
        return [...merged, ...newCustom];
      } catch (e) {
        return initialGames.map(g => ({...g, status: g.status || 'not_downloaded'}));
      }
    }
    return initialGames.map(g => ({...g, status: g.status || 'not_downloaded'}));
  });

  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem('darkMode');
    return saved ? JSON.parse(saved) : false;
  });

  const [expanded, setExpanded] = useState(null);
  const [filter, setFilter] = useState('all');
  const [showAdd, setShowAdd] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('tier');
  const [showSort, setShowSort] = useState(false);
  const [editingNotes, setEditingNotes] = useState(null);
  const [tempNotes, setTempNotes] = useState('');
  const [newGame, setNewGame] = useState({
    name: '', genre: '', fps: '', tier: 'C', priority: 'MEDIUM', 
    trailer: '', desc: '', hours: '', icon: '🎮', tags: []
  });

  useEffect(() => {
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
  }, [darkMode]);

  useEffect(() => {
    localStorage.setItem('gameChecklistData', JSON.stringify(games));
  }, [games]);

  const updateStatus = (id, e) => {
    e.stopPropagation();
    const cycle = ['not_downloaded', 'downloaded', 'playing', 'completed', 'favorite'];
    setGames(games.map(g => {
      if (g.id === id) {
        const idx = cycle.indexOf(g.status);
        return {...g, status: cycle[(idx + 1) % cycle.length]};
      }
      return g;
    }));
  };

  const updateRating = (id, rating) => {
    setGames(games.map(g => g.id === id ? {...g, rating} : g));
  };

  const saveNotes = (id) => {
    setGames(games.map(g => g.id === id ? {...g, notes: tempNotes} : g));
    setEditingNotes(null);
    setTempNotes('');
  };

  const deleteGame = (id) => {
    if (confirm('Delete this game?')) {
      setGames(games.filter(g => g.id !== id));
    }
  };

  const addGame = (e) => {
    e.preventDefault();
    if (!newGame.name.trim()) return;
    const game = {...newGame, id: Date.now(), status: 'not_downloaded'};
    setGames([...games, game]);
    setNewGame({
      name: '', genre: '', fps: '', tier: 'C', priority: 'MEDIUM',
      trailer: '', desc: '', hours: '', icon: '🎮', tags: []
    });
    setShowAdd(false);
  };

  const exportData = () => {
    const dataStr = JSON.stringify(games, null, 2);
    const dataBlob = new Blob([dataStr], {type: 'application/json'});
    const url = URL.createObjectURL(dataBlob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'gaming-checklist-backup.json';
    link.click();
  };

  const importData = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        try {
          const imported = JSON.parse(event.target.result);
          if (confirm(`Import ${imported.length} games? This will replace your current list.`)) {
            setGames(imported);
          }
        } catch (err) {
          alert('Invalid file format');
        }
      };
      reader.readAsText(file);
    }
  };

  const getIcon = (s) => {
    const icons = {
      not_downloaded: <Circle className="w-5 h-5 text-gray-400" />,
      downloaded: <Download className="w-5 h-5 text-blue-500" />,
      playing: <Play className="w-5 h-5 text-green-500" />,
      completed: <Check className="w-5 h-5 text-purple-500" />,
      favorite: <Star className="w-5 h-5 text-yellow-500 fill-yellow-500" />
    };
    return icons[s] || icons.not_downloaded;
  };

  const getBg = (s) => {
    if (darkMode) {
      const bgs = {
        not_downloaded: 'bg-gray-800',
        downloaded: 'bg-blue-900',
        playing: 'bg-green-900',
        completed: 'bg-purple-900',
        favorite: 'bg-yellow-900'
      };
      return bgs[s] || 'bg-gray-800';
    }
    const bgs = {
      not_downloaded: 'bg-white',
      downloaded: 'bg-blue-50',
      playing: 'bg-green-50',
      completed: 'bg-purple-50',
      favorite: 'bg-yellow-50'
    };
    return bgs[s] || 'bg-white';
  };

  const getTier = (t) => {
    const styles = {
      S: 'bg-red-500 text-white',
      A: 'bg-orange-500 text-white',
      B: 'bg-yellow-500 text-white',
      C: 'bg-green-500 text-white',
      R: 'bg-blue-500 text-white'
    };
    return <span className={`px-2 py-1 rounded text-xs font-bold ${styles[t]}`}>{t}</span>;
  };

  let filtered = games.filter(g => {
    const matchesFilter = filter === 'all' || g.status === filter;
    const matchesSearch = g.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          g.genre.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  if (sortBy === 'name') {
    filtered.sort((a, b) => a.name.localeCompare(b.name));
  } else if (sortBy === 'fps') {
    filtered.sort((a, b) => {
      const aFps = parseInt(a.fps.split('-')[1] || a.fps.split('-')[0]);
      const bFps = parseInt(b.fps.split('-')[1] || b.fps.split('-')[0]);
      return bFps - aFps;
    });
  } else if (sortBy === 'rating') {
    filtered.sort((a, b) => (b.rating || 0) - (a.rating || 0));
  } else {
    const order = {S: 0, A: 1, B: 2, C: 3, R: 4};
    filtered.sort((a, b) => {
      if (order[a.tier] !== order[b.tier]) return order[a.tier] - order[b.tier];
      return a.name.localeCompare(b.name);
    });
  }

  const stats = {
    total: games.length,
    not_downloaded: games.filter(g => g.status === 'not_downloaded').length,
    downloaded: games.filter(g => g.status === 'downloaded').length,
    playing: games.filter(g => g.status === 'playing').length,
    completed: games.filter(g => g.status === 'completed').length,
    favorite: games.filter(g => g.status === 'favorite').length,
    completionPercent: Math.round((games.filter(g => g.status === 'completed' || g.status === 'favorite').length / games.length) * 100)
  };

  const bgClass = darkMode ? 'bg-gradient-to-br from-gray-900 via-indigo-900 to-purple-900' : 'bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900';
  const cardBg = darkMode ? 'bg-gray-800' : 'bg-white';
  const textClass = darkMode ? 'text-gray-100' : 'text-gray-800';
  const textMuted = darkMode ? 'text-gray-400' : 'text-gray-600';

  return (
    <div className={`min-h-screen ${bgClass} p-3 transition-colors duration-300`}>
      <div className="max-w-4xl mx-auto">
        
        {/* Header */}
        <div className={`${cardBg} rounded-xl shadow-2xl p-4 mb-4`}>
          <div className="flex justify-between items-center mb-2">
            <h1 className={`text-2xl font-bold ${textClass}`}>🎮 Gaming Checklist</h1>
            <button 
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-lg bg-gray-200 dark:bg-gray-700"
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </div>
          <p className={`text-sm ${textMuted}`}>Tap card to expand • Tap icon to change status</p>
          
          {/* Progress Bar */}
          <div className="mt-3">
            <div className="flex justify-between text-xs mb-1">
              <span className={textMuted}>Completion Progress</span>
              <span className={textClass}>{stats.completionPercent}%</span>
            </div>
            <div className="w-full bg-gray-300 rounded-full h-2">
              <div 
                className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full transition-all"
                style={{width: `${stats.completionPercent}%`}}
              ></div>
            </div>
            <p className="text-xs mt-1 text-center" style={{color: darkMode ? '#9ca3af' : '#6b7280'}}>
              {stats.completed + stats.favorite} of {stats.total} games completed
            </p>
          </div>
        </div>

        {/* Search & Sort */}
        <div className={`${cardBg} rounded-xl shadow-xl p-3 mb-4`}>
          <div className="flex gap-2">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
              <input
                type="text"
                placeholder="Search games..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className={`w-full pl-10 pr-3 py-2 rounded-lg border ${darkMode ? 'bg-gray-700 text-white border-gray-600' : 'bg-white border-gray-300'}`}
              />
            </div>
            <button
              onClick={() => setShowSort(!showSort)}
              className="px-3 py-2 bg-purple-600 text-white rounded-lg"
            >
              <SlidersHorizontal size={20} />
            </button>
          </div>
          
          {showSort && (
            <div className="mt-3 flex gap-2 flex-wrap">
              {[
                ['tier', 'By Tier'],
                ['name', 'By Name'],
                ['fps', 'By FPS'],
                ['rating', 'By Rating']
              ].map(([key, label]) => (
                <button
                  key={key}
                  onClick={() => setSortBy(key)}
                  className={`px-3 py-1 rounded text-sm ${sortBy === key ? 'bg-purple-600 text-white' : darkMode ? 'bg-gray-700 text-gray-300' : 'bg-gray-200 text-gray-700'}`}
                >
                  {label}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-2 mb-4">
          <div className={`${cardBg} rounded-lg p-3 text-center shadow`}>
            <div className={`text-xl font-bold ${textClass}`}>{stats.total}</div>
            <div className={`text-xs ${textMuted}`}>Total</div>
          </div>
          <div className={`${darkMode ? 'bg-green-900' : 'bg-green-100'} rounded-lg p-3 text-center shadow`}>
            <div className={`text-xl font-bold ${darkMode ? 'text-green-300' : 'text-green-700'}`}>{stats.playing}</div>
            <div className={`text-xs ${darkMode ? 'text-green-400' : 'text-green-700'}`}>Playing</div>
          </div>
          <div className={`${darkMode ? 'bg-purple-900' : 'bg-purple-100'} rounded-lg p-3 text-center shadow`}>
            <div className={`text-xl font-bold ${darkMode ? 'text-purple-300' : 'text-purple-700'}`}>{stats.completed}</div>
            <div className={`text-xs ${darkMode ? 'text-purple-400' : 'text-purple-700'}`}>Done</div>
          </div>
        </div>

        {/* Filters */}
        <div className={`${cardBg} rounded-xl shadow-xl p-3 mb-4`}>
          <div className="flex gap-2 overflow-x-auto pb-2">
            {[
              ['all', 'All', stats.total],
              ['not_downloaded', 'Not DL', stats.not_downloaded],
              ['downloaded', 'Downloaded', stats.downloaded],
              ['playing', 'Playing', stats.playing],
              ['completed', 'Done', stats.completed],
              ['favorite', 'Fav', stats.favorite]
            ].map(([key, label, count]) => (
              <button
                key={key}
                onClick={() => setFilter(key)}
                className={`px-3 py-2 rounded whitespace-nowrap text-sm font-medium ${
                  filter === key ? 'bg-purple-600 text-white' : darkMode ? 'bg-gray-700 text-gray-300' : 'bg-gray-100 text-gray-700'
                }`}
              >
                {label} ({count})
              </button>
            ))}
          </div>
        </div>

        {/* Backup/Import */}
        <div className={`${cardBg} rounded-xl shadow-xl p-3 mb-4 flex gap-2`}>
          <button
            onClick={exportData}
            className="flex-1 flex items-center justify-center gap-2 bg-green-500 text-white p-2 rounded-lg font-medium text-sm"
          >
            <DownloadIcon size={16} /> Export Backup
          </button>
          <label className="flex-1 flex items-center justify-center gap-2 bg-blue-500 text-white p-2 rounded-lg font-medium text-sm cursor-pointer">
            <Upload size={16} /> Import Backup
            <input type="file" accept=".json" onChange={importData} className="hidden" />
          </label>
        </div>

        {/* Add Game Button */}
        <div className="mb-4">
          {!showAdd ? (
            <button
              onClick={() => setShowAdd(true)}
              className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl p-4 font-bold shadow-xl flex items-center justify-center gap-2"
            >
              <Plus size={20} /> Add New Game
            </button>
          ) : (
            <div className={`${cardBg} rounded-xl shadow-xl p-4`}>
              <form onSubmit={addGame} className="space-y-3">
                <div className="flex justify-between items-center mb-2">
                  <h3 className={`font-bold ${textClass}`}>Add New Game</h3>
                  <button type="button" onClick={() => setShowAdd(false)}>❌</button>
                </div>
                <input
                  type="text"
                  placeholder="Game Name *"
                  value={newGame.name}
                  onChange={e => setNewGame({...newGame, name: e.target.value})}
                  className={`w-full p-2 border rounded ${darkMode ? 'bg-gray-700 text-white border-gray-600' : ''}`}
                  required
                />
                <div className="grid grid-cols-2 gap-2">
                  <input
                    type="text"
                    placeholder="Genre"
                    value={newGame.genre}
                    onChange={e => setNewGame({...newGame, genre: e.target.value})}
                    className={`w-full p-2 border rounded text-sm ${darkMode ? 'bg-gray-700 text-white border-gray-600' : ''}`}
                  />
                  <input
                    type="text"
                    placeholder="FPS (e.g. 30-40)"
                    value={newGame.fps}
                    onChange={e => setNewGame({...newGame, fps: e.target.value})}
                    className={`w-full p-2 border rounded text-sm ${darkMode ? 'bg-gray-700 text-white border-gray-600' : ''}`}
                  />
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <input
                    type="text"
                    placeholder="Hours (e.g. 10-12)"
                    value={newGame.hours}
                    onChange={e => setNewGame({...newGame, hours: e.target.value})}
                    className={`w-full p-2 border rounded text-sm ${darkMode ? 'bg-gray-700 text-white border-gray-600' : ''}`}
                  />
                  <input
                    type="text"
                    placeholder="Icon (emoji)"
                    value={newGame.icon}
                    onChange={e => setNewGame({...newGame, icon: e.target.value})}
                    className={`w-full p-2 border rounded text-sm ${darkMode ? 'bg-gray-700 text-white border-gray-600' : ''}`}
                  />
                </div>
                <select
                  value={newGame.tier}
                  onChange={e => setNewGame({...newGame, tier: e.target.value})}
                  className={`w-full p-2 border rounded text-sm ${darkMode ? 'bg-gray-700 text-white border-gray-600' : ''}`}
                >
                  <option value="S">S - Must Play</option>
                  <option value="A">A - Excellent</option>
                  <option value="B">B - Worth It</option>
                  <option value="C">C - Classics</option>
                  <option value="R">Racing</option>
                </select>
                <input
                  type="url"
                  placeholder="YouTube Trailer URL"
                  value={newGame.trailer}
                  onChange={e => setNewGame({...newGame, trailer: e.target.value})}
                  className={`w-full p-2 border rounded text-sm ${darkMode ? 'bg-gray-700 text-white border-gray-600' : ''}`}
                />
                <textarea
                  placeholder="Description"
                  value={newGame.desc}
                  onChange={e => setNewGame({...newGame, desc: e.target.value})}
                  className={`w-full p-2 border rounded text-sm ${darkMode ? 'bg-gray-700 text-white border-gray-600' : ''}`}
                  rows="2"
                />
                <div className="flex gap-2">
                  <button type="submit" className="flex-1 bg-green-500 text-white p-2 rounded font-bold">Save</button>
                  <button type="button" onClick={() => setShowAdd(false)} className="flex-1 bg-gray-300 text-gray-700 p-2 rounded font-bold">Cancel</button>
                </div>
              </form>
            </div>
          )}
        </div>

        {/* Game List */}
        <div className="space-y-3">
          {filtered.map(game => (
            <div
              key={game.id}
              className={`${getBg(game.status)} rounded-xl shadow-lg overflow-hidden transition-all`}
            >
              <div
                onClick={() => setExpanded(expanded === game.id ? null : game.id)}
                className="p-4 cursor-pointer active:opacity-80"
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-start gap-3 flex-1 min-w-0">
                    {/* Game Icon */}
                    <div className="text-3xl flex-shrink-0">{game.icon || '🎮'}</div>
                    
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1 flex-wrap">
                        <h3 className={`font-bold ${darkMode ? 'text-white' : 'text-gray-800'}`}>{game.name}</h3>
                        {getTier(game.tier)}
                      </div>
                      <div className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-600'} space-y-1`}>
                        <div>📂 {game.genre} • ⚡ {game.fps} FPS</div>
                        {game.hours && <div>⏱️ {game.hours} hours</div>}
                        {game.rating && (
                          <div className="flex gap-1">
                            {[1,2,3,4,5].map(i => (
                              <Star key={i} size={12} className={i <= game.rating ? 'fill-yellow-500 text-yellow-500' : 'text-gray-400'} />
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex flex-col items-center gap-2">
                    <div onClick={(e) => updateStatus(game.id, e)}>
                      {getIcon(game.status)}
                    </div>
                    {expanded === game.id ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                  </div>
                </div>
              </div>

              {expanded === game.id && (
                <div className={`px-4 pb-4 space-y-3 border-t ${darkMode ? 'border-gray-700' : 'border-gray-200'} pt-3`}>
                  {game.desc && (
                    <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-700'} leading-relaxed`}>{game.desc}</p>
                  )}
                  
                  {/* Rating */}
                  <div>
                    <p className={`text-xs ${textMuted} mb-1`}>Your Rating:</p>
                    <div className="flex gap-1">
                      {[1,2,3,4,5].map(i => (
                        <button
                          key={i}
                          onClick={(e) => { e.stopPropagation(); updateRating(game.id, i); }}
                          className="focus:outline-none"
                        >
                          <Star size={20} className={i <= (game.rating || 0) ? 'fill-yellow-500 text-yellow-500' : 'text-gray-400'} />
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Notes */}
                  <div>
                    <p className={`text-xs ${textMuted} mb-1`}>Notes:</p>
                    {editingNotes === game.id ? (
                      <div className="space-y-2">
                        <textarea
                          value={tempNotes}
                          onChange={(e) => setTempNotes(e.target.value)}
                          className={`w-full p-2 border rounded text-sm ${darkMode ? 'bg-gray-700 text-white border-gray-600' : ''}`}
                          rows="3"
                          onClick={(e) => e.stopPropagation()}
                        />
                        <div className="flex gap-2">
                          <button
                            onClick={(e) => { e.stopPropagation(); saveNotes(game.id); }}
                            className="flex-1 bg-green-500 text-white p-2 rounded text-sm font-bold"
                          >
                            Save
                          </button>
                          <button
                            onClick={(e) => { e.stopPropagation(); setEditingNotes(null); }}
                            className="flex-1 bg-gray-300 text-gray-700 p-2 rounded text-sm font-bold"
                          >
                            Cancel
                          </button>
                        </div>
                      </div>
                    ) : (
                      <button
                        onClick={(e) => { e.stopPropagation(); setEditingNotes(game.id); setTempNotes(game.notes || ''); }}
                        className={`w-full p-2 border rounded text-sm text-left ${darkMode ? 'bg-gray-700 border-gray-600 text-gray-300' : 'bg-gray-50 border-gray-300'}`}
                      >
                        {game.notes || 'Add notes...'}
                      </button>
                    )}
                  </div>

                  {/* Links */}
                  <div className="space-y-2">
                    {game.trailer && (
                      <a
                        href={game.trailer}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 bg-red-500 text-white p-3 rounded-lg font-bold"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <Youtube size={18} /> Watch Trailer
                      </a>
                    )}
                    <a
                      href={`https://www.youtube.com/results?search_query=gameranx+${encodeURIComponent(game.name)}+before+you+buy`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 bg-blue-500 text-white p-3 rounded-lg font-bold"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <BookOpen size={18} /> Gameranx Review
                    </a>
                  </div>

                  {/* Delete Button */}
                  {game.id >= 1000 && (
                    <button
                      onClick={(e) => { e.stopPropagation(); deleteGame(game.id); }}
                      className="w-full flex items-center justify-center gap-2 bg-red-600 text-white p-2 rounded-lg text-sm font-bold"
                    >
                      <Trash2 size={16} /> Delete Game
                    </button>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className={`${cardBg} rounded-xl shadow-xl p-8 text-center`}>
            <p className={`${textMuted} text-lg`}>No games found</p>
            <p className={`${textMuted} text-sm mt-2`}>Try adjusting your search or filter</p>
          </div>
        )}

        {/* Legend */}
        <div className={`${cardBg} rounded-xl shadow-xl p-4 mt-6`}>
          <h3 className={`font-bold mb-3 ${textClass}`}>How to Use</h3>
          <div className={`space-y-2 text-sm ${textMuted}`}>
            <p>• <strong>Tap card</strong> to expand details</p>
            <p>• <strong>Tap status icon</strong> to cycle statuses</p>
            <p>• <strong>Tap stars</strong> to rate games</p>
            <p>• <strong>Add notes</strong> to remember thoughts</p>
            <p>• <strong>Export/Import</strong> to backup your data</p>
          </div>
          <h3 className={`font-bold mt-4 mb-2 ${textClass}`}>Status Icons</h3>
          <div className="grid grid-cols-2 gap-2 text-sm">
            <div className="flex items-center gap-2"><Circle className="w-4 h-4 text-gray-400" /> Not Downloaded</div>
            <div className="flex items-center gap-2"><Download className="w-4 h-4 text-blue-500" /> Downloaded</div>
            <div className="flex items-center gap-2"><Play className="w-4 h-4 text-green-500" /> Playing</div>
            <div className="flex items-center gap-2"><Check className="w-4 h-4 text-purple-500" /> Completed</div>
            <div className="flex items-center gap-2"><Star className="w-4 h-4 text-yellow-500 fill-yellow-500" /> Favorite</div>
          </div>
        </div>

        <div className={`text-center text-sm ${textMuted} mt-6 mb-4`}>
          Made with ❤️ for Q's Gaming Journey
        </div>
      </div>
    </div>
  );
};

export default GameChecklist;