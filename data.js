const TEAM_META = {"team": "International Team", "month": "September 2026", "params": ["ss", "etq", "prob", "sol", "fu", "tag"]};
const AGENTS = {
 "pooja": {
  "name": "Pooja",
  "initials": "PO",
  "color": "#0d9488",
  "cq": 97,
  "audits": 5,
  "ncf": 0,
  "totalErrors": 1,
  "params": {
   "ss": 1,
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
    "text": "Missed rapport building flagged in 1 of 5 audits, for example on the Feedback call case (24 Sep). Build rapport: thank first-time customers for choosing CaratLane, appreciate their choice of design and acknowledge occasions they mention."
   },
   {
    "cat": "ss",
    "label": "Soft Skills",
    "text": "Missing positive/ownership phrases flagged in 1 of 5 audits, for example on the Feedback call case (24 Sep). Use ownership phrases such as \"I will personally check this for you\" or \"Let me make sure this gets resolved\" instead of neutral or negative wording."
   }
  ],
  "cases": [
   {
    "query": "Presales",
    "score": 100,
    "ncf": false,
    "date": "10 Sep",
    "comment": "Good work!!"
   },
   {
    "query": "Presales",
    "score": 100,
    "ncf": false,
    "date": "24 Sep",
    "comment": "Good call to fix the Clive appointment, but there's background noise. Please sit at a distance or seprately during such conversation as the other JC said thank you on another call, customer felt it was this call and said thank you as well."
   },
   {
    "query": "Feedback call",
    "score": 83,
    "ncf": false,
    "date": "24 Sep",
    "comment": "When the customer says he is a first time customer, please appriciate them for choosing CL. Thank them for being a part, it improves the overall exp."
   },
   {
    "query": "Presales",
    "score": 100,
    "ncf": false,
    "date": "24 Sep",
    "comment": "Good work!!"
   },
   {
    "query": "Customization",
    "score": 100,
    "ncf": false,
    "date": "24 Sep",
    "comment": "Good work!!"
   }
  ],
  "paramCaseMap": {
   "ss": [
    2
   ],
   "etq": [],
   "prob": [],
   "sol": [],
   "fu": [],
   "tag": []
  }
 },
 "aanchalm": {
  "name": "Aanchal_M",
  "initials": "AM",
  "color": "#7c3aed",
  "cq": 96,
  "audits": 10,
  "ncf": 0,
  "totalErrors": 3,
  "params": {
   "ss": 2,
   "etq": 0,
   "prob": 0,
   "sol": 0,
   "fu": 0,
   "tag": 1
  },
  "aois": [
   {
    "cat": "ss",
    "label": "Soft Skills",
    "text": "Query not understood first time flagged in 1 of 10 audits, for example on the Feedback call case (24 Sep). Listen or read carefully to understand the query the first time, and confirm your understanding before answering."
   },
   {
    "cat": "ss",
    "label": "Soft Skills",
    "text": "Interrupting the customer flagged in 1 of 10 audits, for example on the Exchange case (24 Sep). Let the customer finish, and let an irate customer vent, before responding. Interrupting makes them repeat themselves and escalates frustration."
   },
   {
    "cat": "ss",
    "label": "Soft Skills",
    "text": "Making the customer repeat information flagged in 1 of 10 audits, for example on the Feedback call case (24 Sep). Do not make the customer repeat details they have already shared. Scroll up, check previous interactions and note key details early."
   }
  ],
  "cases": [
   {
    "query": "Customisation",
    "score": 100,
    "ncf": false,
    "date": "08 Sep",
    "comment": "Good work!!"
   },
   {
    "query": "Presales",
    "score": 100,
    "ncf": false,
    "date": "08 Sep",
    "comment": "Good work!!"
   },
   {
    "query": "General Purchase",
    "score": 100,
    "ncf": false,
    "date": "08 Sep",
    "comment": "Good work!!"
   },
   {
    "query": "offers",
    "score": 100,
    "ncf": false,
    "date": "15 Sep",
    "comment": "Excellent work!!"
   },
   {
    "query": "MTO",
    "score": 100,
    "ncf": false,
    "date": "15 Sep",
    "comment": "Good chat!!"
   },
   {
    "query": "Presales",
    "score": 100,
    "ncf": false,
    "date": "23 Sep",
    "comment": "Good work"
   },
   {
    "query": "Presales",
    "score": 100,
    "ncf": false,
    "date": "23 Sep",
    "comment": "Good work"
   },
   {
    "query": "Presales",
    "score": 95,
    "ncf": false,
    "date": "23 Sep",
    "comment": "Good email, please close the ticket from pending as its been over 10 days."
   },
   {
    "query": "Exchange",
    "score": 80,
    "ncf": false,
    "date": "24 Sep",
    "comment": "JC sounded a bit lost on call. Interrupted the customer while he had something to say."
   },
   {
    "query": "Feedback call",
    "score": 88,
    "ncf": false,
    "date": "24 Sep",
    "comment": "While doing feedback call for store visit and purchases, always keep the order details and store details handy. The customer asked twice which order, they might have multiple orders too since she had purchased in India as well. Its recommended to keep such details available before contacting the customer"
   }
  ],
  "paramCaseMap": {
   "ss": [
    8,
    9
   ],
   "etq": [],
   "prob": [],
   "sol": [],
   "fu": [],
   "tag": [
    7
   ]
  }
 },
 "uzairk": {
  "name": "Uzair_K",
  "initials": "UK",
  "color": "#2563eb",
  "cq": 95,
  "audits": 10,
  "ncf": 0,
  "totalErrors": 4,
  "params": {
   "ss": 2,
   "etq": 1,
   "prob": 1,
   "sol": 0,
   "fu": 0,
   "tag": 0
  },
  "aois": [
   {
    "cat": "etq",
    "label": "Etiquette",
    "text": "Rushing the close flagged in 1 of 10 audits, for example on the Presales case (25 Sep). Do not rush the close. Confirm the customer is satisfied before ending the interaction."
   },
   {
    "cat": "ss",
    "label": "Soft Skills",
    "text": "Missed rapport building flagged in 1 of 10 audits, for example on the Presales case (25 Sep). Build rapport: thank first-time customers for choosing CaratLane, appreciate their choice of design and acknowledge occasions they mention."
   },
   {
    "cat": "ss",
    "label": "Soft Skills",
    "text": "Missed empathy flagged in 1 of 10 audits, for example on the MTO case (15 Sep). Acknowledge the customer's situation and apologise for any delay or inconvenience before moving to the process. A sincere, specific apology in the first response changes the tone of the whole interaction."
   }
  ],
  "cases": [
   {
    "query": "General Purchase",
    "score": 100,
    "ncf": false,
    "date": "08 Sep",
    "comment": "Good work!"
   },
   {
    "query": "Exchange",
    "score": 100,
    "ncf": false,
    "date": "08 Sep",
    "comment": "Good work!!"
   },
   {
    "query": "Gemstone Enquiry",
    "score": 100,
    "ncf": false,
    "date": "08 Sep",
    "comment": "good work!"
   },
   {
    "query": "MTO",
    "score": 88,
    "ncf": false,
    "date": "15 Sep",
    "comment": "Please empathise when the customer raises a question against product quality. Rest all good."
   },
   {
    "query": "LTE",
    "score": 100,
    "ncf": false,
    "date": "21 Sep",
    "comment": "Good work!!"
   },
   {
    "query": "Presales",
    "score": 100,
    "ncf": false,
    "date": "24 Sep",
    "comment": "Good work!! Today is the 4th day, please follow up with MTO team."
   },
   {
    "query": "Presales",
    "score": 90,
    "ncf": false,
    "date": "24 Sep",
    "comment": "Good work!! AOI - Going fwd for such cases inform the customer that as an alt we can recommend the best designs in plain gold which can suit her requirements better."
   },
   {
    "query": "Presales",
    "score": 100,
    "ncf": false,
    "date": "25 Sep",
    "comment": "Revised audit. JC shared proofs on wapp."
   },
   {
    "query": "Presales",
    "score": 69,
    "ncf": false,
    "date": "25 Sep",
    "comment": "Good work, but when the customer said its his first purchase, JC failed to thank the customer. Interruptions on call found, felt like rushing on call. Cx shared the link of ring, JC said thank you for sharing, should appriciate the customer for their choice."
   },
   {
    "query": "Presales",
    "score": 100,
    "ncf": false,
    "date": "25 Sep",
    "comment": "Good work"
   }
  ],
  "paramCaseMap": {
   "ss": [
    3,
    8
   ],
   "etq": [
    8
   ],
   "prob": [
    6
   ],
   "sol": [],
   "fu": [],
   "tag": []
  }
 },
 "soundarya": {
  "name": "Soundarya",
  "initials": "SO",
  "color": "#0891b2",
  "cq": 94,
  "audits": 5,
  "ncf": 0,
  "totalErrors": 3,
  "params": {
   "ss": 0,
   "etq": 2,
   "prob": 0,
   "sol": 1,
   "fu": 0,
   "tag": 0
  },
  "aois": [
   {
    "cat": "etq",
    "label": "Etiquette",
    "text": "Rushing the close flagged in 1 of 5 audits, for example on the Presales case (25 Sep). Do not rush the close. Confirm the customer is satisfied before ending the interaction."
   },
   {
    "cat": "etq",
    "label": "Etiquette",
    "text": "Further assistance not checked flagged in 1 of 5 audits, for example on the Presales case (25 Sep). Always check for further assistance before closing."
   },
   {
    "cat": "sol",
    "label": "Solution & Rec.",
    "text": "Incomplete information flagged in 1 of 5 audits, for example on the Presales case (24 Sep). Close the information gap completely: share the full process, TAT and next steps, and address every point the customer raised."
   }
  ],
  "cases": [
   {
    "query": "LTE",
    "score": 100,
    "ncf": false,
    "date": "21 Sep",
    "comment": "Good work!!"
   },
   {
    "query": "Presales",
    "score": 83,
    "ncf": false,
    "date": "24 Sep",
    "comment": "Good call, she could have tried to ask the customer to share the design of choice to assist better."
   },
   {
    "query": "Presales",
    "score": 100,
    "ncf": false,
    "date": "24 Sep",
    "comment": "Good work!"
   },
   {
    "query": "Presales",
    "score": 94,
    "ncf": false,
    "date": "25 Sep",
    "comment": "Give customer time before asking if there's anything else we can assist with. It sounds like we are rushing to end the call."
   },
   {
    "query": "Presales",
    "score": 94,
    "ncf": false,
    "date": "25 Sep",
    "comment": "Good work. Please reduce the rate of speech. AOI - Further assistance is mandatory"
   }
  ],
  "paramCaseMap": {
   "ss": [],
   "etq": [
    3,
    4
   ],
   "prob": [],
   "sol": [
    1
   ],
   "fu": [],
   "tag": []
  }
 },
 "prasadk": {
  "name": "Prasad_K",
  "initials": "PK",
  "color": "#b8860b",
  "cq": 93,
  "audits": 10,
  "ncf": 0,
  "totalErrors": 4,
  "params": {
   "ss": 2,
   "etq": 1,
   "prob": 0,
   "sol": 1,
   "fu": 0,
   "tag": 0
  },
  "aois": [
   {
    "cat": "ss",
    "label": "Soft Skills",
    "text": "Missed rapport building flagged in 2 of 10 audits, for example on the Post sales case (25 Sep). Build rapport: thank first-time customers for choosing CaratLane, appreciate their choice of design and acknowledge occasions they mention."
   },
   {
    "cat": "ss",
    "label": "Soft Skills",
    "text": "Missing positive/ownership phrases flagged in 2 of 10 audits, for example on the Post sales case (25 Sep). Use ownership phrases such as \"I will personally check this for you\" or \"Let me make sure this gets resolved\" instead of neutral or negative wording."
   },
   {
    "cat": "ss",
    "label": "Soft Skills",
    "text": "Missed empathy flagged in 1 of 10 audits, for example on the Post sales case (25 Sep). Acknowledge the customer's situation and apologise for any delay or inconvenience before moving to the process. A sincere, specific apology in the first response changes the tone of the whole interaction."
   }
  ],
  "cases": [
   {
    "query": "Order Status",
    "score": 100,
    "ncf": false,
    "date": "08 Sep",
    "comment": "Good work!"
   },
   {
    "query": "Exchange Status",
    "score": 100,
    "ncf": false,
    "date": "08 Sep",
    "comment": "Good work!!"
   },
   {
    "query": "CTC",
    "score": 100,
    "ncf": false,
    "date": "08 Sep",
    "comment": "Good work!!"
   },
   {
    "query": "Exchange",
    "score": 100,
    "ncf": false,
    "date": "15 Sep",
    "comment": "Good one!!"
   },
   {
    "query": "Exchange in India",
    "score": 100,
    "ncf": false,
    "date": "15 Sep",
    "comment": "Good work!!"
   },
   {
    "query": "Post sales",
    "score": 88,
    "ncf": false,
    "date": "24 Sep",
    "comment": "During the end of email \"I hope the above information was helpful\" was not needed, its canned signature. Please avoid using it for all cases, also in such cases what we could do is notify the customer that we shall take this eperience as a learning ensuring this is not repetative for any of our esteemed customers in future. A few positive lines will increase the overall exp."
   },
   {
    "query": "Post sales",
    "score": 92,
    "ncf": false,
    "date": "24 Sep",
    "comment": "Avoid Delayed response"
   },
   {
    "query": "Presales",
    "score": 88,
    "ncf": false,
    "date": "24 Sep",
    "comment": "Please share an expected TAT to customers."
   },
   {
    "query": "Post sales",
    "score": 67,
    "ncf": false,
    "date": "25 Sep",
    "comment": "When the customer says everything is good \"thank them\", when cx said its a low Karat brand, avoid saying ok thank you. Empathise and let the customers know that we spealise in that however we shall take her feedback and come up with more designs, we have already started with 22KT with diamonds etc. Better affermations are expected on such calls."
   },
   {
    "query": "Post sales",
    "score": 100,
    "ncf": false,
    "date": "25 Sep",
    "comment": "Good call AOI - in the end JC said it was have been completed to your source account instead of Visa, use any one if both are same as it may cause confusion."
   }
  ],
  "paramCaseMap": {
   "ss": [
    5,
    8
   ],
   "etq": [
    6
   ],
   "prob": [],
   "sol": [
    7
   ],
   "fu": [],
   "tag": []
  }
 },
 "swethar": {
  "name": "Swetha_R",
  "initials": "SR",
  "color": "#db2777",
  "cq": 89,
  "audits": 7,
  "ncf": 0,
  "totalErrors": 3,
  "params": {
   "ss": 2,
   "etq": 0,
   "prob": 0,
   "sol": 1,
   "fu": 0,
   "tag": 0
  },
  "aois": [
   {
    "cat": "ss",
    "label": "Soft Skills",
    "text": "Missed rapport building flagged in 1 of 7 audits, for example on the Post sales case (25 Sep). Build rapport: thank first-time customers for choosing CaratLane, appreciate their choice of design and acknowledge occasions they mention."
   },
   {
    "cat": "ss",
    "label": "Soft Skills",
    "text": "Missed empathy flagged in 1 of 7 audits, for example on the Post sales case (24 Sep). Acknowledge the customer's situation and apologise for any delay or inconvenience before moving to the process. A sincere, specific apology in the first response changes the tone of the whole interaction."
   },
   {
    "cat": "sol",
    "label": "Solution & Rec.",
    "text": "Incomplete information flagged in 1 of 7 audits, for example on the Post sales case (24 Sep). Close the information gap completely: share the full process, TAT and next steps, and address every point the customer raised."
   }
  ],
  "cases": [
   {
    "query": "Post sales",
    "score": 67,
    "ncf": false,
    "date": "24 Sep",
    "comment": "cx had enquired for order status of 2 designs specifically a ring, JC notified the status of ring, ignoring the other SKU in the order."
   },
   {
    "query": "Post sales",
    "score": 100,
    "ncf": false,
    "date": "24 Sep",
    "comment": "Good work"
   },
   {
    "query": "Post sales",
    "score": 100,
    "ncf": false,
    "date": "24 Sep",
    "comment": "Good work"
   },
   {
    "query": "Post sales",
    "score": 90,
    "ncf": false,
    "date": "24 Sep",
    "comment": "Empathise that due to our issues customer had to cancel the order. Rest all are fine"
   },
   {
    "query": "Post sales",
    "score": 100,
    "ncf": false,
    "date": "24 Sep",
    "comment": "Good work!!"
   },
   {
    "query": "Post sales",
    "score": 100,
    "ncf": false,
    "date": "25 Sep",
    "comment": "Good work"
   },
   {
    "query": "Post sales",
    "score": 67,
    "ncf": false,
    "date": "25 Sep",
    "comment": "A lot of background noise on call, please accomodate yourself in a less crowded place. Allow the customer to finish before interrupting, the cx said its for his wife's bday, we must emphasie and wish the cx on occasion."
   }
  ],
  "paramCaseMap": {
   "ss": [
    3,
    6
   ],
   "etq": [],
   "prob": [],
   "sol": [
    0
   ],
   "fu": [],
   "tag": []
  }
 },
 "devadharshinid": {
  "name": "Devadharshini_D",
  "initials": "DD",
  "color": "#16a34a",
  "cq": 84,
  "audits": 10,
  "ncf": 0,
  "totalErrors": 7,
  "params": {
   "ss": 3,
   "etq": 1,
   "prob": 1,
   "sol": 2,
   "fu": 0,
   "tag": 0
  },
  "aois": [
   {
    "cat": "ss",
    "label": "Soft Skills",
    "text": "Missed empathy flagged in 2 of 10 audits, for example on the Callback case (24 Sep). Acknowledge the customer's situation and apologise for any delay or inconvenience before moving to the process. A sincere, specific apology in the first response changes the tone of the whole interaction."
   },
   {
    "cat": "ss",
    "label": "Soft Skills",
    "text": "Missing positive/ownership phrases flagged in 2 of 10 audits, for example on the Callback case (24 Sep). Use ownership phrases such as \"I will personally check this for you\" or \"Let me make sure this gets resolved\" instead of neutral or negative wording."
   },
   {
    "cat": "ss",
    "label": "Soft Skills",
    "text": "Tone not inviting flagged in 2 of 10 audits, for example on the Callback case (24 Sep). Keep the tone warm and open so the customer feels comfortable asking follow-up questions, especially when they are frustrated."
   }
  ],
  "cases": [
   {
    "query": "Order Status",
    "score": 83,
    "ncf": false,
    "date": "10 Sep",
    "comment": "Customer reached out seeking order status, the question was already available if we could just scroll up. Do not make the customer's repeat the info that we already have and structure the responses better."
   },
   {
    "query": "Order Status",
    "score": 100,
    "ncf": false,
    "date": "10 Sep",
    "comment": "Good chat!!"
   },
   {
    "query": "Product quality",
    "score": 62,
    "ncf": false,
    "date": "10 Sep",
    "comment": "Re-aduited with BOD: Customer reached out regarding product quality issue, the 10KT design turned black and she questioned the authenticity. Devadarshini notified the customer that it is indeeded real gold but she failed to provide any resolution for the dissatisfaction. No pitch for exchange/repolish was made if the customer is unhappy and the order is under 1 year policy."
   },
   {
    "query": "Refund",
    "score": 100,
    "ncf": false,
    "date": "15 Sep",
    "comment": "Good work!!"
   },
   {
    "query": "Order status",
    "score": 100,
    "ncf": false,
    "date": "15 Sep",
    "comment": "Good chat"
   },
   {
    "query": "Price Drop",
    "score": 100,
    "ncf": false,
    "date": "15 Sep",
    "comment": "Good work!!"
   },
   {
    "query": "POP",
    "score": 100,
    "ncf": false,
    "date": "15 Sep",
    "comment": "Good work!!"
   },
   {
    "query": "Presales",
    "score": 100,
    "ncf": false,
    "date": "23 Sep",
    "comment": "Good work"
   },
   {
    "query": "Callback",
    "score": 33,
    "ncf": false,
    "date": "24 Sep",
    "comment": "Customer faced an issue regarding order status, DD failed to empathise and notified the customer that hari would call him back. When the customer refrained from a callback and proceeded to seek assistance, DD tried assisting the customer but there a discrepency from previous conversation which Hari and Cx had. DD failed to empathise again. She could have handled this better and arranged a callback as well. A better phrase here would be \"I apologise for the discrepency here, I do understand your concern as well. Since Mr Hari had a conversation with you earlier and it is an order manually placed by him, what i could do is arrange a callback from him for better assistance as he would be the right person with the details on your order\"."
   },
   {
    "query": "Transferred call",
    "score": 60,
    "ncf": false,
    "date": "24 Sep",
    "comment": "Transferred to presale, when the customer said nobody is picking at store, DD should have empathised and ensured assistance with phrase like \"I apologise for the experience do not worry, I will connect you with a dedicated backend sales representative, they shall ensure your concerns are addressed right away\"."
   }
  ],
  "paramCaseMap": {
   "ss": [
    0,
    8,
    9
   ],
   "etq": [
    8
   ],
   "prob": [
    2
   ],
   "sol": [
    2,
    8
   ],
   "fu": [],
   "tag": []
  }
 },
 "hitenk": {
  "name": "Hiten_K",
  "initials": "HK",
  "color": "#ea580c",
  "cq": 81,
  "audits": 7,
  "ncf": 1,
  "totalErrors": 6,
  "params": {
   "ss": 0,
   "etq": 3,
   "prob": 0,
   "sol": 1,
   "fu": 1,
   "tag": 1
  },
  "aois": [
   {
    "cat": "fu",
    "label": "Follow Up · NCF",
    "text": "1 NCF this month on Presales. Own every hand-off and commitment: never cold-transfer without telling the customer, reply after every \"let me check\", and create the lead or follow-up before the interaction closes."
   },
   {
    "cat": "etq",
    "label": "Etiquette",
    "text": "Delayed or incomplete greeting/response flagged in 3 of 7 audits, for example on the Presales case (24 Sep). Open with a complete greeting and respond promptly. Delayed responses on chat leave the customer waiting and set a poor tone."
   },
   {
    "cat": "fu",
    "label": "Follow Up",
    "text": "Request not raised / not passed on flagged in 1 of 7 audits, for example on the Presales case (24 Sep). Raise the required request or pass the case to the right team before closing the interaction."
   }
  ],
  "cases": [
   {
    "query": "Offers and Discounts",
    "score": 90,
    "ncf": false,
    "date": "10 Sep",
    "comment": "Please address all queries raised by the customer. A good chat as the customer left on a happy note, but Hiten failed to address the loyalty points query."
   },
   {
    "query": "Presales",
    "score": 88,
    "ncf": false,
    "date": "10 Sep",
    "comment": "Avoid Delayed responses"
   },
   {
    "query": "Gifted Exchange",
    "score": 100,
    "ncf": false,
    "date": "10 Sep",
    "comment": "Good work!!"
   },
   {
    "query": "New purchase",
    "score": 100,
    "ncf": false,
    "date": "15 Sep",
    "comment": "Good work!!"
   },
   {
    "query": "General Purchase",
    "score": 100,
    "ncf": false,
    "date": "15 Sep",
    "comment": "Good work!!"
   },
   {
    "query": "Presales",
    "score": 0,
    "ncf": true,
    "date": "24 Sep",
    "comment": "Cx wanted customization, No follow up found! No lead created."
   },
   {
    "query": "Presales",
    "score": 92,
    "ncf": false,
    "date": "24 Sep",
    "comment": "Good work Avoid Delayed responses"
   }
  ],
  "paramCaseMap": {
   "ss": [],
   "etq": [
    1,
    5,
    6
   ],
   "prob": [],
   "sol": [
    0
   ],
   "fu": [
    5
   ],
   "tag": [
    5
   ]
  }
 },
 "haribhagats": {
  "name": "Haribhagat_S",
  "initials": "HS",
  "color": "#4f46e5",
  "cq": 76,
  "audits": 10,
  "ncf": 2,
  "totalErrors": 8,
  "params": {
   "ss": 3,
   "etq": 3,
   "prob": 0,
   "sol": 1,
   "fu": 1,
   "tag": 0
  },
  "aois": [
   {
    "cat": "ss",
    "label": "Soft Skills · NCF",
    "text": "2 NCFs this month on Exchange, Post sales. Own every hand-off and commitment: never cold-transfer without telling the customer, reply after every \"let me check\", and create the lead or follow-up before the interaction closes."
   },
   {
    "cat": "ss",
    "label": "Soft Skills",
    "text": "Missed empathy flagged in 3 of 10 audits, for example on the Exchange case (08 Sep). Acknowledge the customer's situation and apologise for any delay or inconvenience before moving to the process. A sincere, specific apology in the first response changes the tone of the whole interaction."
   },
   {
    "cat": "etq",
    "label": "Etiquette",
    "text": "Further assistance not checked flagged in 2 of 10 audits, for example on the Post sales case (24 Sep). Always check for further assistance before closing."
   }
  ],
  "cases": [
   {
    "query": "Order Cancellation",
    "score": 100,
    "ncf": false,
    "date": "08 Sep",
    "comment": "Good work!!"
   },
   {
    "query": "Exchange",
    "score": 0,
    "ncf": true,
    "date": "08 Sep",
    "comment": "Customer wanted to exchange an order with a different design. On Sep 1 at 8:16 AM, a cold transfer was done to Soundarya for live images without notifying the customer. She missed replying to the customer after her first response, leaving the customer on hold for hours. Uzair also missed addressing the query after asking for a moment to check, further frustrating the customer while they watched the item price increase. Customer was upset and messaged again, after which Hari assisted them. On Sep 2, when the customer asked what the exchange process was, Hari missed addressing it and made the customer ask again. When the customer mentioned not getting an email, Hari sent a screenshot of his own previous chat message with \"Please check this\"—this tone was sarcastic, defensive, and completely damaged the customer experience. Customer then asked if we could resend the return label, but Hari completely ignored this request and provided no replies or updates. Customer asked \"Are we connected?\" with no response. When the customer sent a \"Hi\" hours later, Hari replied just for the sake of responding, offering minimal engagement instead of proactive support."
   },
   {
    "query": "Refund Status",
    "score": 100,
    "ncf": false,
    "date": "08 Sep",
    "comment": "Good work!!"
   },
   {
    "query": "ID proof at Delivery",
    "score": 100,
    "ncf": false,
    "date": "15 Sep",
    "comment": "Good work!!"
   },
   {
    "query": "Return Request",
    "score": 100,
    "ncf": false,
    "date": "15 Sep",
    "comment": "Good chat!!"
   },
   {
    "query": "Exchange Status",
    "score": 100,
    "ncf": false,
    "date": "15 Sep",
    "comment": "Good work!!"
   },
   {
    "query": "Presales",
    "score": 100,
    "ncf": false,
    "date": "23 Sep",
    "comment": "Good work"
   },
   {
    "query": "Presales",
    "score": 100,
    "ncf": false,
    "date": "23 Sep",
    "comment": "Good work"
   },
   {
    "query": "Post sales",
    "score": 58,
    "ncf": false,
    "date": "24 Sep",
    "comment": "Customer started the call with a complaint that she got only 1 earring from a pair which is supposedly to be in 2. Hari failed to empathise and said I understand can i keep your hold. Unheld the call and apologised to the customer, multiple interruption found on call. Tried retention and committed a follow up within 24 hours. Since the call is 7 hours ago, marking the same as not applicable under follow up for now. Ensure we follow up on this today"
   },
   {
    "query": "Post sales",
    "score": 0,
    "ncf": true,
    "date": "24 Sep",
    "comment": "Should have apologised for the misunderstanding and assured that it will be sent by tomorrow. Customer also asked that its not showing on app so how will he raise return or exchange, hari guided the customer (Missed empathy again). No further assistance pitched and the call was disconnected."
   }
  ],
  "paramCaseMap": {
   "ss": [
    1,
    8,
    9
   ],
   "etq": [
    1,
    8,
    9
   ],
   "prob": [],
   "sol": [
    1
   ],
   "fu": [
    1
   ],
   "tag": []
  }
 }
};
const PARAM_LABELS = {"ss": "Soft Skills", "etq": "Etiquette", "prob": "Probing", "sol": "Solution & Rec.", "fu": "Follow Up", "tag": "Tagging"};
const PARAM_SHORT = {"ss": "Soft Skills", "etq": "Etiquette", "prob": "Probing", "sol": "Solution", "fu": "Follow Up", "tag": "Tagging"};
const PARAM_COLORS = {"ss": "#ea580c", "etq": "#db2777", "prob": "#2563eb", "sol": "#dc2626", "fu": "#16a34a", "tag": "#7c3aed"};
