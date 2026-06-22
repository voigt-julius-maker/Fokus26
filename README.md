# Fokus26 Chat — Deployment auf Vercel (kostenlos)

## Schritt 1 — GitHub Repository erstellen

1. Gehe zu github.com → einloggen oder registrieren (kostenlos)
2. Klicke oben rechts auf „+" → „New repository"
3. Name: `fokus26-chat`
4. Visibility: **Private** (wichtig — dein API Key bleibt sicher)
5. Klicke „Create repository"

## Schritt 2 — Dateien hochladen

Lade diese drei Dateien in das Repository hoch:

```
fokus26-chat/
├── vercel.json
├── api/
│   └── chat.js
└── public/
    └── index.html
```

So geht's auf GitHub:
- Im Repository auf „Add file" → „Upload files" klicken
- Ordner anlegen: erst `api/chat.js`, dann `public/index.html` hochladen
- `vercel.json` direkt ins Stammverzeichnis

## Schritt 3 — Groq API Key holen (kostenlos)

1. Gehe zu console.groq.com
2. Kostenlos registrieren
3. Links auf „API Keys" → „Create API Key"
4. Key kopieren (beginnt mit `gsk_...`)

## Schritt 4 — Auf Vercel deployen

1. Gehe zu vercel.com → kostenlos mit GitHub einloggen
2. „Add New Project" → dein Repository `fokus26-chat` auswählen
3. Vor dem Deploy: unter **„Environment Variables"**:
   - Name: `GROQ_API_KEY`
   - Value: deinen Groq Key einfügen (`gsk_...`)
4. Klicke „Deploy"

## Schritt 5 — Fertig!

Vercel gibt dir eine URL wie:
`https://fokus26-chat.vercel.app`

Diese URL kannst du deinen Studierenden schicken — kein Login, kein Key nötig.

## Kosten

- Vercel: kostenlos (Hobby Plan)
- Groq: kostenlos (großzügiges Tageslimit)
- GitHub: kostenlos

## API Key sicher halten

- Der Key ist nur als Umgebungsvariable auf Vercel gespeichert
- Niemand kann ihn aus dem Browser auslesen
- Falls du ihn wechseln willst: Vercel → dein Projekt → Settings → Environment Variables
