const TEAM_META = {"team": "International Team", "month": "November 2026", "params": ["ss", "etq", "prob", "sol", "fu", "tag"]};
const AGENTS = {
 "hitenk": {
  "name": "Hiten_K",
  "initials": "HK",
  "color": "#ea580c",
  "cq": 98,
  "audits": 5,
  "ncf": 0,
  "totalErrors": 3,
  "params": {
   "ss": 1,
   "etq": 0,
   "prob": 0,
   "sol": 2,
   "fu": 0,
   "tag": 0
  },
  "aois": [
   {
    "cat": "sol",
    "label": "Solution & Rec.",
    "text": "Incomplete information flagged in 2 of 5 email audits (BOD given). Give the customer every detail they need to decide in one reply, so they don't have to write back to ask."
   },
   {
    "cat": "ss",
    "label": "Soft Skills",
    "text": "Rapport flagged in 1 audit, on the gold rate email. Lines like \"has nothing to do with\" read as blunt, so keep the tone soft and empathetic, and open your first response with your introduction before answering."
   }
  ],
  "cases": [
   {
    "query": "Presales Call",
    "score": 100,
    "ncf": false,
    "date": "16–25 Nov",
    "comment": "Good"
   },
   {
    "query": "Presales Email",
    "score": 88,
    "ncf": false,
    "date": "16–25 Nov",
    "comment": "frame the gold rate response better \"has nothing to do with\" sounds direct and a statement, responses should be empathetic and softer. Also First response should be your intro and then respond to cx."
   },
   {
    "query": "Presales Email",
    "score": 100,
    "ncf": false,
    "date": "16–25 Nov",
    "comment": "Good"
   },
   {
    "query": "Presales Email",
    "score": 100,
    "ncf": false,
    "date": "16–25 Nov",
    "comment": "Good"
   },
   {
    "query": "Presales Email",
    "score": 100,
    "ncf": false,
    "date": "16–25 Nov",
    "comment": "Good"
   }
  ],
  "paramCaseMap": {
   "ss": [
    1
   ],
   "etq": [],
   "prob": [],
   "sol": [
    3,
    4
   ],
   "fu": [],
   "tag": []
  }
 },
 "pooja": {
  "name": "Pooja",
  "initials": "PO",
  "color": "#0d9488",
  "cq": 97,
  "audits": 5,
  "ncf": 0,
  "totalErrors": 2,
  "params": {
   "ss": 0,
   "etq": 0,
   "prob": 0,
   "sol": 2,
   "fu": 0,
   "tag": 0
  },
  "aois": [
   {
    "cat": "sol",
    "label": "Solution & Rec.",
    "text": "Information gaps flagged in 2 of 5 email audits: one incomplete and one incorrect. When the customer replies \"ok\" to \"please let us know if you'd like to proceed\", explain the next step in the process instead of closing with \"is there anything else\", and always confirm the amounts."
   }
  ],
  "cases": [
   {
    "query": "Presales Call",
    "score": 100,
    "ncf": false,
    "date": "16–25 Nov",
    "comment": "Good"
   },
   {
    "query": "Presales Email",
    "score": 100,
    "ncf": false,
    "date": "16–25 Nov",
    "comment": "confirm the amounts going fwd"
   },
   {
    "query": "Presales Email",
    "score": 83,
    "ncf": false,
    "date": "16–25 Nov",
    "comment": "when we replied with please let us know if you'd like to proceed and cx said ok, we must reply the next process not is there anything else and end it."
   },
   {
    "query": "Presales Email",
    "score": 100,
    "ncf": false,
    "date": "16–25 Nov",
    "comment": "Good work"
   },
   {
    "query": "Post Sales Email",
    "score": 100,
    "ncf": false,
    "date": "16–25 Nov",
    "comment": "Good work"
   }
  ],
  "paramCaseMap": {
   "ss": [],
   "etq": [],
   "prob": [],
   "sol": [
    1,
    2
   ],
   "fu": [],
   "tag": []
  }
 },
 "soundarya": {
  "name": "Soundarya",
  "initials": "SO",
  "color": "#0891b2",
  "cq": 97,
  "audits": 5,
  "ncf": 0,
  "totalErrors": 2,
  "params": {
   "ss": 2,
   "etq": 0,
   "prob": 0,
   "sol": 0,
   "fu": 0,
   "tag": 0
  },
  "aois": [
   {
    "cat": "ss",
    "label": "Soft Skills",
    "text": "Soft skills flagged in 2 of 5 audits: interrupting the customer on a call (1), and a delayed email response without empathy (1). Let the customer finish before you speak, and if a check is taking time, tell the customer you're on it rather than leaving them waiting."
   }
  ],
  "cases": [
   {
    "query": "Post Sales Call",
    "score": 100,
    "ncf": false,
    "date": "16–25 Nov",
    "comment": "Good"
   },
   {
    "query": "Post Sales Call",
    "score": 100,
    "ncf": false,
    "date": "16–25 Nov",
    "comment": "Good"
   },
   {
    "query": "Post Sales Call",
    "score": 100,
    "ncf": false,
    "date": "16–25 Nov",
    "comment": "Good"
   },
   {
    "query": "Presales Email",
    "score": 100,
    "ncf": false,
    "date": "16–25 Nov",
    "comment": "Good work"
   },
   {
    "query": "Presales Email",
    "score": 83,
    "ncf": false,
    "date": "16–25 Nov",
    "comment": "Good work, avoid delayed response. And inform the customer if it is taking time for us to check and get back"
   }
  ],
  "paramCaseMap": {
   "ss": [
    0,
    4
   ],
   "etq": [],
   "prob": [],
   "sol": [],
   "fu": [],
   "tag": []
  }
 },
 "prasadk": {
  "name": "Prasad_K",
  "initials": "PK",
  "color": "#b8860b",
  "cq": 83,
  "audits": 5,
  "ncf": 0,
  "totalErrors": 5,
  "params": {
   "ss": 3,
   "etq": 0,
   "prob": 0,
   "sol": 2,
   "fu": 0,
   "tag": 0
  },
  "aois": [
   {
    "cat": "ss",
    "label": "Soft Skills",
    "text": "Soft skills flagged in 3 of 5 audits, including 2 calls where the customer's query wasn't understood the first time and they had to repeat themselves. Listen to the full concern and paraphrase it back before answering; for example, a ring size can be checked against an existing ring without the husband being present. Empathise when a customer says they're running late or leaving."
   },
   {
    "cat": "sol",
    "label": "Solution & Rec.",
    "text": "Incomplete information flagged in 2 email audits (BOD given). Where an earlier miscommunication is involved, check whether an exception is possible before replying, and share the complete picture in one go."
   }
  ],
  "cases": [
   {
    "query": "Post Sales Call",
    "score": 100,
    "ncf": false,
    "date": "16–25 Nov",
    "comment": "Good"
   },
   {
    "query": "Post Sales Call",
    "score": 67,
    "ncf": false,
    "date": "16–25 Nov",
    "comment": "prasad could have handeled this better, ring size could be checked with rings as well no need of husband being there."
   },
   {
    "query": "Post Sales Call",
    "score": 67,
    "ncf": false,
    "date": "16–25 Nov",
    "comment": "Cx had to repeat multiple times, Prasad failed to understand what she meant."
   },
   {
    "query": "Presales Email",
    "score": 83,
    "ncf": false,
    "date": "16–25 Nov",
    "comment": "when cx said its alreday late and they're leaving, empathise."
   },
   {
    "query": "Presales Email",
    "score": 100,
    "ncf": false,
    "date": "16–25 Nov",
    "comment": "Good, should check for exception once since someone miscommunicated earlier"
   }
  ],
  "paramCaseMap": {
   "ss": [
    1,
    2,
    3
   ],
   "etq": [],
   "prob": [],
   "sol": [
    3,
    4
   ],
   "fu": [],
   "tag": []
  }
 },
 "uzairk": {
  "name": "Uzair_K",
  "initials": "UK",
  "color": "#2563eb",
  "cq": 73,
  "audits": 5,
  "ncf": 1,
  "totalErrors": 3,
  "params": {
   "ss": 1,
   "etq": 0,
   "prob": 1,
   "sol": 1,
   "fu": 0,
   "tag": 0
  },
  "aois": [
   {
    "cat": "sol",
    "label": "Solution & Rec. · NCF",
    "text": "1 NCF this month (Post Sales Chat): the chat was closed with a canned response without acknowledging the customer's query, even though the concern was visible further up the chat. Scroll through the full conversation and give basic assistance before closing any chat."
   },
   {
    "cat": "prob",
    "label": "Probing",
    "text": "Lack of probing and a missing ownership line flagged on a Presales Chat. When you say \"I will surely help you with the same\", also ask for time so the customer knows you are checking with the backend team."
   }
  ],
  "cases": [
   {
    "query": "Post Sales Email",
    "score": 100,
    "ncf": false,
    "date": "16–25 Nov",
    "comment": "Good work"
   },
   {
    "query": "Post Sales Email",
    "score": 100,
    "ncf": false,
    "date": "16–25 Nov",
    "comment": "Good work, please ensure to follow up today."
   },
   {
    "query": "Presales Chat",
    "score": 63,
    "ncf": false,
    "date": "16–25 Nov",
    "comment": "When using this response \"Thank you for sharing your query with us. I will surely help you with the same.\" Seek time as well so customer knows your are checking with the backend team."
   },
   {
    "query": "Post Sales Chat",
    "score": 100,
    "ncf": false,
    "date": "16–25 Nov",
    "comment": "Good work"
   },
   {
    "query": "Post Sales Chat",
    "score": 0,
    "ncf": true,
    "date": "16–25 Nov",
    "comment": "Chat closed with no response canned without acknowleding the customer's query, the concern was available already if we could scroll up. A basic assistance is must."
   }
  ],
  "paramCaseMap": {
   "ss": [
    2
   ],
   "etq": [],
   "prob": [
    2
   ],
   "sol": [
    4
   ],
   "fu": [],
   "tag": []
  }
 },
 "swethar": {
  "name": "Swetha_R",
  "initials": "SR",
  "color": "#db2777",
  "cq": 72,
  "audits": 5,
  "ncf": 1,
  "totalErrors": 5,
  "params": {
   "ss": 2,
   "etq": 0,
   "prob": 0,
   "sol": 1,
   "fu": 2,
   "tag": 0
  },
  "aois": [
   {
    "cat": "fu",
    "label": "Follow Up · NCF",
    "text": "1 NCF this month (Post Sales Chat): time was taken to check with the team and notify the customer within an hour, but no follow-up came after the hour. Treat every timeline you give the customer as a commitment and set a reminder the moment you make it."
   },
   {
    "cat": "fu",
    "label": "Follow Up",
    "text": "Delayed follow-up flagged on another chat: 3–5 minutes were requested, but the reply went 18 minutes later with no apology. If you'll exceed the time you asked for, update the customer before it runs out and apologise for the wait."
   },
   {
    "cat": "ss",
    "label": "Soft Skills",
    "text": "Missed empathy flagged in 2 of 5 audits. When a customer says they're confused by our chat or waiting on us, acknowledge it first before moving on to the process."
   }
  ],
  "cases": [
   {
    "query": "Post Sales Email",
    "score": 83,
    "ncf": false,
    "date": "16–25 Nov",
    "comment": "Good work but empathise when cx says they're confused by our chat"
   },
   {
    "query": "Post Sales Email",
    "score": 100,
    "ncf": false,
    "date": "16–25 Nov",
    "comment": "Good work"
   },
   {
    "query": "Presales Chat",
    "score": 100,
    "ncf": false,
    "date": "16–25 Nov",
    "comment": "Good work"
   },
   {
    "query": "Post Sales Chat",
    "score": 75,
    "ncf": false,
    "date": "16–25 Nov",
    "comment": "Good chat, but swetha should be more effective in communicating with the customer if it exceeds the expected TAT set by her for the customer. @8:37 swetha seeked time for 3-5 minutes, the response was sent at 8:55, way beyond the TAT sent. No apology found for the delayed response."
   },
   {
    "query": "Post Sales Chat",
    "score": 0,
    "ncf": true,
    "date": "16–25 Nov",
    "comment": "Swetha seeked time to check with the team and notify the customer within an hour. No follow up after the hour on chat found."
   }
  ],
  "paramCaseMap": {
   "ss": [
    0,
    3
   ],
   "etq": [],
   "prob": [],
   "sol": [
    4
   ],
   "fu": [
    3,
    4
   ],
   "tag": []
  }
 },
 "devadharshinid": {
  "name": "Devadharshini_D",
  "initials": "DD",
  "color": "#16a34a",
  "cq": 100,
  "audits": 3,
  "ncf": 0,
  "totalErrors": 0,
  "params": {
   "ss": 0,
   "etq": 0,
   "prob": 0,
   "sol": 0,
   "fu": 0,
   "tag": 0
  },
  "aois": [
   {
    "cat": "win",
    "label": "Keep It Up",
    "text": "No errors flagged in 3 audits this month (on long leave, so not ranked). A clean start, keep the same standard going into December."
   }
  ],
  "cases": [
   {
    "query": "Presales Email",
    "score": 100,
    "ncf": false,
    "date": "16–25 Nov",
    "comment": "Good work"
   },
   {
    "query": "Presales Email",
    "score": 100,
    "ncf": false,
    "date": "16–25 Nov",
    "comment": "Good work"
   },
   {
    "query": "Presales Email",
    "score": 100,
    "ncf": false,
    "date": "16–25 Nov",
    "comment": "Good work"
   }
  ],
  "paramCaseMap": {
   "ss": [],
   "etq": [],
   "prob": [],
   "sol": [],
   "fu": [],
   "tag": []
  }
 }
};
const PARAM_LABELS = {"ss": "Soft Skills", "etq": "Etiquette", "prob": "Probing", "sol": "Solution & Rec.", "fu": "Follow Up", "tag": "Tagging"};
const PARAM_SHORT = {"ss": "Soft Skills", "etq": "Etiquette", "prob": "Probing", "sol": "Solution", "fu": "Follow Up", "tag": "Tagging"};
const PARAM_COLORS = {"ss": "#ea580c", "etq": "#db2777", "prob": "#2563eb", "sol": "#dc2626", "fu": "#16a34a", "tag": "#7c3aed"};
