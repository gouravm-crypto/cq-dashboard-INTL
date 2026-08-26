const AGENTS = {
  uzair: {
    name:"Uzair_K", initials:"UK", color:"#16a34a",
    cq:95, audits:10, ncf:0, totalErrors:4,
    params:{ss:1, sol:1, prob:1, tag:0, fu:1},
    aois:[
      {cat:"prob", label:"Probing", text:"Ask about the occasion behind a purchase, not just the specs. On the mangalsutra customization case, Uzair correctly checked sizing but missed asking why the customer was buying it, a natural moment to compliment the choice and build rapport."},
      {cat:"ss", label:"Soft Skills", text:"Pitch further assistance before closing out. On the exchange request case, the resolution was correct but the call ended without checking if the customer needed anything else."},
      {cat:"fu", label:"Follow Up", text:"Log every lead in the H&W sheet, even when the immediate query is resolved. Skipping this on the SKU availability case means no one follows up on that lead for a later sale."},
      {cat:"sol", label:"Solution & Rec.", text:"Compliment the customer's choice when sharing offer details, not just the facts. On the offers & discounts case, the information was accurate but the interaction felt transactional."}
    ],
    cases:[
      {query:"General Query", score:80, comment:"Good call"},
      {query:"Customization", score:90, comment:"Cx was looking for a mangalsutra to be customised in size 16. The JC checked for customisation details. However, the occasion or reason of purchase could have been asked while complementing the customer for the design."},
      {query:"Exchange", score:100, comment:"Good work!!"},
      {query:"Shaya", score:100, comment:"Good work!!"},
      {query:"General Purchase", score:100, comment:"Good work!!"},
      {query:"Exchange request", score:75, comment:"Good work!! AOI - please pitch further assistance"},
      {query:"Order Status", score:80, comment:"Good work!!"},
      {query:"Customization", score:100, comment:"Good work!!"},
      {query:"SKU available at store", score:60, comment:"Customer wanted to look for 2 designs at store, Uzair provided the customer with the right assistance however he failed to create a lead in H&W sheet and this mandatory step leads to a miss in follow up and sale later on."},
      {query:"Offers & discounts", score:90, comment:"Cx was looking for the current offers on specific shared sku's. JC assisted the cx with the details. AOI- always compliment the choice of the cx."}
    ],
    paramCaseMap:{ss:[5], sol:[9], prob:[1], tag:[], fu:[8]}
  },
  pooja: {
    name:"Pooja", initials:"PJ", color:"#0d9488",
    cq:94, audits:10, ncf:0, totalErrors:4,
    params:{ss:0, sol:0, prob:2, tag:0, fu:2},
    aois:[
      {cat:"fu", label:"Follow Up", text:"Follow through on every promise, including internal handoffs. Pooja told a customer she would revert on a second SKU within 24 hours but never did, and separately handed a lead to a colleague without closing the loop herself. If you commit to a timeline, own it to the end."},
      {cat:"prob", label:"Probing", text:"Pitch for real videos or C-Live when a customer is deciding on a design remotely. On the customisation case, the details were shared but the visual pitch was skipped, a missed chance to help the customer decide with confidence."}
    ],
    cases:[
      {query:"Customization", score:80, comment:"Good call"},
      {query:"Delivery Date", score:80, comment:"Revised audit - Good work"},
      {query:"New design", score:80, comment:"Good work!!"},
      {query:"Order Status", score:60, comment:"Transferred call, but JC was kind enough to understand and empathise."},
      {query:"General Purchase", score:60, comment:"Customer requested for pricing of 2 SKU's, Pooja assisted the customer however on 20th, Pooja mentioned that she will get back to the customer for the second SKU details within 24 hours but we do not see any update. Internally Pooja gave it to Hiten as it was his lead."},
      {query:"Exchange Request", score:100, comment:"Good work!!"},
      {query:"General Purchase", score:80, comment:"Good work!!"},
      {query:"Glitter", score:100, comment:"Good work!!"},
      {query:"Exchange request", score:80, comment:"Cx was looking for exchange of his platinum ring in one size bigger."},
      {query:"Customisation existing design", score:60, comment:"Cx was looking for a customisation of a ring. JC shared the details but could have pitched for real videos or Clive too."}
    ],
    paramCaseMap:{ss:[], sol:[], prob:[9], tag:[], fu:[4]}
  },
  swetha: {
    name:"Swetha_R", initials:"SR", color:"#0891b2",
    cq:90, audits:10, ncf:0, totalErrors:13,
    params:{ss:9, sol:2, prob:1, tag:0, fu:1},
    aois:[
      {cat:"ss", label:"Soft Skills", text:"Never let a customer wonder who they're speaking to, and don't interrupt. On the return-request call, Swetha referred to her team as 'backend' when asked, instead of clearly identifying herself as a Customer Service Representative from the Head Office and offering to connect the customer to the store. She also interrupted the customer and showed weak empathy on the same call, and empathy and spelling gaps recurred on two later cases."},
      {cat:"prob", label:"Probing", text:"Ask for the cancellation reason before processing a return. On the return-request call, Swetha didn't inquire why the customer wanted to cancel, missing the chance to probe for an exchange with C-Live instead."},
      {cat:"sol", label:"Solution & Rec.", text:"Attempt retention before letting a return go through. The same call skipped any customer-retention attempt, and the resolution path wasn't fully explored before closing."},
      {cat:"fu", label:"Follow Up", text:"Log every promised callback immediately. Swetha promised a callback on the return-request call but never logged the customer's phone number on the store callback sheet, so the promise had no way of being kept."}
    ],
    cases:[
      {query:"Exchange at Store", score:35, comment:"Swetha assisted a customer requesting a return but failed to inquire about the cancellation reason, missing the opportunity to probe for an exchange with C-Live or attempt customer retention. She also forgot to document the customer's phone number on the store callback sheet after promising a call back. To improve, Swetha needs to avoid interrupting the customer, demonstrate stronger empathy throughout the call, and ensure process compliance. Additionally, when asked if she works for customer service or the store, she must avoid referring to her team as 'backend' and instead state, 'I am a Customer Service Representative from the Head Office. Would you like me to connect you with the store?'"},
      {query:"Order status", score:60, comment:"Good work!!"},
      {query:"General Query", score:100, comment:"Good work"},
      {query:"POP", score:80, comment:"Good work!!"},
      {query:"Order Status", score:70, comment:"Good work!! AOI - Please empathise better."},
      {query:"Order Status", score:80, comment:"Good work!!"},
      {query:"Second time exchange", score:100, comment:"Good Work!!"},
      {query:"POP", score:70, comment:"Please portray empathy towards customers and avoid spelling mistakes."},
      {query:"Return Request", score:70, comment:"Cx came for return. JC assisted the cx for the return request."},
      {query:"Return Status", score:60, comment:"Cx has raised a request for the return but the same was delayed and cx did not get the label. AOI- always mention the reason for the delay."}
    ],
    paramCaseMap:{ss:[0,4,7,8], sol:[0], prob:[0], tag:[], fu:[0]}
  },
  aanchal: {
    name:"Aanchal_M", initials:"AM", color:"#7c3aed",
    cq:89, audits:10, ncf:0, totalErrors:10,
    params:{ss:8, sol:1, prob:0, tag:1, fu:0},
    aois:[
      {cat:"ss", label:"Soft Skills", text:"Build rapport and lead with empathy, especially on chat. Across several cases, Aanchal replied correctly but skipped the warmer touch: not welcoming a first-time shopper, making a customer repeat a size already given, and missing empathy on a technical-glitch order and on a couple of exchange chats. Small warmth cues (welcoming language, not asking for repeated info, acknowledging frustration) matter as much as the correct answer."},
      {cat:"sol", label:"Solution & Rec.", text:"Don't leave a request only partially fulfilled. On the real image/video request, Aanchal missed sharing the requested visual on the chat entirely."},
      {cat:"tag", label:"Tagging", text:"Proofread before sending, and double check disposition accuracy. The general-purchase case had multiple spelling errors (e.g. 'dallar' instead of dollar) and referenced a chat that never happened."}
    ],
    cases:[
      {query:"MTO", score:80, comment:"Good call"},
      {query:"RTS", score:90, comment:"Good work but build more rapport with customers - when the customer says it's their first time shopping with CL, do not just reply with thank you for sharing the details, instead make them feel welcomed."},
      {query:"Product Details", score:95, comment:"Good work, please make sure we assign the chat then reply on time."},
      {query:"Customization", score:90, comment:"Good chat but made the customer repeat the size, when the customer already mentioned 60 cms, could have converted the same and assisted the customer."},
      {query:"Exchange", score:50, comment:"Exchange query, well handled. AOI - lacks empathy."},
      {query:"General Purchase", score:75, comment:"Customer reached out seeking assistance placing an order after a tech glitch. Aanchal assisted with the findings and notified him the coupon isn't applicable under $500, suggested an alternative, and followed up. AOI: the email lacked empathy for the frustration caused by the glitch, and had multiple spelling/language errors (e.g. 'dallar' instead of dollar, referencing a 'chat' that never occurred on email)."},
      {query:"Presale", score:90, comment:"Good work but please empathise with the customer based on the customer's sentiments on the chat."},
      {query:"Purchase", score:90, comment:"Good work, please empathise on chats."},
      {query:"PoP Policy", score:100, comment:"Cx was looking for the PoP enrollment. JC assisted the cx with the details but cx became inactive."},
      {query:"Real image & video", score:60, comment:"Cx was looking for the live video and image of the selected sku. JC missed to share the same on the chat."}
    ],
    paramCaseMap:{ss:[1,2,3,4,5,6,7], sol:[9], prob:[], tag:[5], fu:[]}
  },
  hiten: {
    name:"Hiten_K", initials:"HK", color:"#2563eb",
    cq:87, audits:10, ncf:1, totalErrors:7,
    params:{ss:4, sol:1, prob:2, tag:0, fu:0},
    aois:[
      {cat:"ss", label:"Soft Skills", text:"Show empathy on cost objections and stop pitching something the customer already declined. On the store-pickup NCF, Hiten correctly explained the $25 shipping policy but showed no empathy for the cost, used the word 'clients' instead of customer-appropriate language, and pushed the POP scheme a second time after an explicit decline."},
      {cat:"prob", label:"Probing", text:"Probe fully before dumping all the information at once. On the jewellery-selection case, too much information was shared without first understanding exactly what the customer needed for her delivery deadline."},
      {cat:"sol", label:"Solution & Rec.", text:"Offer cart-building alternatives instead of leaving a gap. On the same NCF case, Hiten failed to offer alternative in-stock recommendations or confirm a store callback for the customer."}
    ],
    cases:[
      {query:"Order Cancellation", score:80, comment:"Good call"},
      {query:"Store Visit (NCF)", score:0, comment:"NCF. The customer reached out to purchase a Swastik Good Luck Gold Charm for pickup at the Dallas store to avoid a $25 shipping charge. Hiten correctly informed the customer that store pickup on online orders under $300 still incurs the fee. However, the chat handling was severely lacking: no empathy toward the steep shipping cost, inappropriate terminology ('clients'), and the POP scheme was pushed a second time despite an explicit decline. Hiten also failed to offer cart-building alternatives or notify the customer of a store callback."},
      {query:"Product Details", score:100, comment:"Good work!!"},
      {query:"Domestic Callback", score:100, comment:"Good work!!"},
      {query:"CTC", score:100, comment:"The customer asked when the last POP payment was due. Hiten responded promptly, clarified all 9 payments were complete, explained the maturity/bonus timeline, and pitched a cross-sell opportunity. He followed up multiple times over 11 days to drive conversion - while the query was answered correctly, 5 repetitive follow-up emails without a response borders on over-emailing."},
      {query:"Exchange Request", score:100, comment:"Good work!!"},
      {query:"Exchange", score:80, comment:"Good work!! Please structure the chat response before sending."},
      {query:"Presale", score:100, comment:"Good work!!"},
      {query:"Jewellery selection", score:70, comment:"Cx was looking for a women's bracelet that could be delivered by 14th Aug. AOI - lack of probing and too much info at the same time."},
      {query:"Offers & discounts", score:80, comment:"Cx was looking for the free shipping offer."}
    ],
    paramCaseMap:{ss:[1], sol:[8], prob:[8], tag:[], fu:[]}
  },
  devadharshini: {
    name:"Devadharshini_D", initials:"DD", color:"#ea580c",
    cq:84, audits:10, ncf:1, totalErrors:11,
    params:{ss:8, sol:3, prob:0, tag:0, fu:0},
    aois:[
      {cat:"ss", label:"Soft Skills", text:"Lead with empathy before diving into process, especially since order lookups take a moment. Across several cases, Devadharshini gave the correct information but skipped acknowledging the wait or the customer's frustration first. On the repair-to-replacement case, a grammatically awkward sentence also made the resolution harder to follow."},
      {cat:"sol", label:"Solution & Rec.", text:"Address the actual request, not the adjacent one. On the delayed-order NCF, the customer explicitly asked to swap her order for a different pendant and pay the difference, but Devadharshini ignored the swap request and simply repeated the tracking ID. On the repair-request case, she also missed sharing the repair policy details the customer had asked about."}
    ],
    cases:[
      {query:"Order status", score:60, comment:"Good call"},
      {query:"Order Status", score:60, comment:"Good work!! Please empathise for delayed response, BOD given since you were on call."},
      {query:"Return Request", score:75, comment:"Good work"},
      {query:"Order Details", score:70, comment:"Good work, please empathise with customers."},
      {query:"Order Status", score:55, comment:"Good work!! AOI - please pitch for further assistance on all customer queries across channels."},
      {query:"Order Status (NCF)", score:0, comment:"NCF. The customer explicitly asked to cancel/exchange her delayed order (Mauna Flexi Bracelet) for a different pendant and pay the price difference, in direct response to CaratLane's earlier offer to swap the order. Devadharshini ignored the swap request, failed to acknowledge the pendant image provided, and simply gave the tracking ID stating the item was already in transit."},
      {query:"Repair to Replacement", score:65, comment:"Customer wanted to know the repair status; the first response was delayed. Devadharshini informed the customer that repair wasn't possible and offered an exceptional replacement, but used a grammatically incorrect sentence. She confirmed the address and proceeded with the order, resolving the query."},
      {query:"Order Status", score:80, comment:"Good work!! Going forward please empathise with the customer as it takes a few minutes to check the order details."},
      {query:"xCL points related", score:60, comment:"Cx had posted a review online for the designs purchased but was awaiting the points. JC informed the TAT. AOI - need to be proactive in sharing complete info; could have informed the total points that would be credited."},
      {query:"Repair request", score:70, comment:"Cx was looking for the repair of his order. JC informed she would raise the request for the repair label. AOI - failed to acknowledge and share details on repair policy asked by cx."}
    ],
    paramCaseMap:{ss:[2,3,4,5,6], sol:[5,9], prob:[], tag:[], fu:[]}
  },
  soundarya: {
    name:"Soundarya", initials:"SD", color:"#b8860b",
    cq:81, audits:10, ncf:1, totalErrors:11,
    params:{ss:3, sol:4, prob:2, tag:1, fu:1},
    aois:[
      {cat:"sol", label:"Solution & Rec.", text:"Take ownership of a chat instead of letting it go cold. On the NCF, a customer's opening message asking for kids' jewellery help went unanswered for days - a voicemail was left and a WhatsApp sent, but no call was ever made and no one owned the initial chat despite knowing what the customer wanted. On a separate safety question about silicone earring backings, reassurance was skipped in favor of a generic acknowledgment."},
      {cat:"ss", label:"Soft Skills", text:"Respond faster, and don't make a customer ask twice. On the mangalsutra video-call case, delayed responses meant the customer had to request a video call more than once. On another case, first response time on chat needed work."},
      {cat:"prob", label:"Probing", text:"Probe promptly so a request doesn't stall. Both the NCF case and the delayed video-call case involved a customer's need going unaddressed while probing or follow-through lagged."},
      {cat:"tag", label:"Tagging", text:"Log every attempted contact. On the NCF, no call was found on Freshcaller and no ownership was logged on the initial chat, making it impossible to trace what was actually attempted."},
      {cat:"fu", label:"Follow Up", text:"Structure and pace responses so information doesn't get bunched. On the order-status email case, the response was accurate and timely but the structure needed work."}
    ],
    cases:[
      {query:"Clive", score:80, comment:"Good call"},
      {query:"General Purchase", score:100, comment:"Well Done!!!"},
      {query:"General Purchase", score:90, comment:"When the customer expressed safety concerns about silicone backing for a baby's earrings, Soundarya simply said 'I understand mam!' and asked if she bought from CaratLane, instead of reassuring her that silicone backings are specifically engineered for infant/kid safety."},
      {query:"General Presale", score:100, comment:"Good work!!"},
      {query:"General Query (NCF)", score:0, comment:"NCF. Customer reached out with 'Need assistance with purchasing kids jewelery.' Soundarya replied with a Hi template and no response after this; a voicemail was left and a WhatsApp sent on later dates, but no call was found on Freshcaller, and no ownership was logged on the initial chat despite knowing what the customer wanted."},
      {query:"Order Status", score:60, comment:"The customer reached out via email inquiring about dispatch status. Soundarya responded promptly within 27 minutes, accurately identifying the pending product and providing concrete, realistic timelines. The tone was warm and professional. AOI - structure could be better, PVT notes mentioned for reference."},
      {query:"General Purchase", score:100, comment:"Good work!!"},
      {query:"General Presale", score:70, comment:"Chat was handled very well. Need to work on first response time though."},
      {query:"Video Call Request", score:40, comment:"Cx was looking for mangalsutra and was asking for the video call. JC assisted with the details but the responses were pretty much delayed and cx had to ask for video call more than twice."},
      {query:"Wants to place order", score:80, comment:"Cx was looking to place an order for Rakhi so wanted to know the delivery timeline and charges."}
    ],
    paramCaseMap:{ss:[7,8], sol:[2,4], prob:[4,8], tag:[4], fu:[9]}
  },
  prasad: {
    name:"Prasad_K", initials:"PK", color:"#dc2626",
    cq:65, audits:10, ncf:2, totalErrors:24,
    params:{ss:16, sol:3, prob:3, tag:2, fu:0},
    aois:[
      {cat:"ss", label:"Soft Skills", text:"Empathy has to come first, on nearly every case this month. Prasad repeatedly gave correct information without acknowledging frustration, delay, or disappointment - on an exchange request, a delayed order-status case, a return-status case, and two chats that closed without any proper empathy or closure. Delayed responses need an apology attached, not just an answer."},
      {cat:"prob", label:"Probing", text:"Actually address what the customer asked. On the exchange case, a direct request for design recommendations was ignored entirely. On the international-exchange NCF, the customer's specific question ('how do I get a piece here') went unanswered."},
      {cat:"sol", label:"Solution & Rec.", text:"Close the loop instead of going quiet. On the international-exchange NCF, Prasad explained the policy correctly but never recommended a new US purchase path, and abruptly closed the chat hours later without checking in. On a separate NCF, a customer was told the order would ship by a date and then received no further response at all."},
      {cat:"tag", label:"Tagging", text:"Log every interaction accurately, especially on cases that go quiet. Both NCFs this month lacked proper closure or tagging once the conversation stalled."}
    ],
    cases:[
      {query:"Return Request", score:60, comment:"Good call!"},
      {query:"Exchange", score:50, comment:"Please empathise with customers - when a customer asks for design recommendations, do not ignore the request. Either arrange a callback or share the design link from the website."},
      {query:"Exchange Request (NCF)", score:0, comment:"NCF. Customer held an order purchased in India and requested to exchange it at a US store, as she was unsure when she'd return to India. Prasad accurately explained the international exchange restriction, but breached the chat SLA (~23-minute delay), failed to address her specific question, failed to recommend a new US purchase path, made uncorrected spelling errors, and abruptly closed the chat hours later without checking if she needed further assistance."},
      {query:"Order Status", score:45, comment:"Avoid delayed responses; if that happens, apologise for the delayed response."},
      {query:"Return Request", score:85, comment:"Good work!! Please empathise and pitch further assistance."},
      {query:"Return Status", score:55, comment:"Good work!! Please ask for further assistance."},
      {query:"Exchange", score:80, comment:"Avoid using the phrase 'my system got freeze.' Overall good chat, will discuss in feedback."},
      {query:"Exchange Status", score:70, comment:"Please empathise better - the customer said she had not received the return label; JC replied with a timeframe but should have empathised with the customer first."},
      {query:"General Query (NCF)", score:0, comment:"NCF. Customer came on chat asking for delivery status and was very disappointed with no update. JC replied stating the order would ship out by Aug 12, and then did not respond to the customer again."},
      {query:"Delay complaint", score:30, comment:"Cx came on chats asking for the order status; the order had been delayed, and the customer was disappointed. AOI - lack of empathy, no ownership on delayed responses, no proper closure."}
    ],
    paramCaseMap:{ss:[1,2,3,4,5,7,8,9], sol:[2,8], prob:[1,2], tag:[2,8], fu:[]}
  }
};

const PARAM_LABELS = {ss:"Soft Skills", sol:"Solution & Rec.", prob:"Probing", tag:"Tagging", fu:"Follow Up"};
const PARAM_COLORS = {ss:"#ea580c", sol:"#dc2626", prob:"#2563eb", tag:"#7c3aed", fu:"#16a34a"};
