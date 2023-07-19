

export const scriptProntos = [{
  indice: '2 DR - dia 1', 
  onCall: ''+
    ' - 2 attempts were made to contact the advertiser by phone through Speakeasy, but were unsuccessful,'+  
    '\n - I am going to send the advertiser an email informing the attempt and I am going to wait at the meet for 10min,' +
    '\n - I made another attempt to contact the advertiser but it was unsuccessful,'+
    '\n - I am going to start the followup of 2 Day Rule' , 
  nextAction:''+
    ' - I will make a new contact attempt on the next business day,'
}, {
  indice: '2 DR - dia 2', 
  onCall: ''+
    '\n - No hubo respuesta del anunciante vía email,'+
    '\n - Se realizaron 2 intentos de contacto vía telefono, pero sin éxito,'+
    '\n - El anunciante no respondió a los intentos de contacto realizados por teléfono y correo electrónico,', 
  nextAction: ''+
    ' - The case will be closed.'
}, {
  
}, {
  indice: '2 DR - Rescheduled', 
  onCall: ''+
    ' - contact the advertiser by phone,'+
    '\n - Informed that he had an unforeseen event and could not participate in the meeting, and requested to reschedule the meeting,'+
    '\n - case rescheduled for day XX/XX - HH/MM. '  , 
  nextAction: ''+
    ' - the case will be rescheduled'
}, {
  indice: 'Rescheduled', 
  onCall: ''+
    ' - contact the advertiser,'+
    '\n- He informed that he had an unforeseen event and could not attend the meeting, and requested to reschedule it,'+
    '\n - case rescheduled for day XX/XX at HH/MM.'  , 
  nextAction: ''+
    ' - the case will be rescheduled'
}, {
  indice: 'Rescheduled - inative', 
  onCall: ''+
    ' - 2 attempts were made to contact by phone, but without success,'+
    '\n - I am going to send the advertiser an email regarding the contact attempt, and wait 10 minutes,'+
    '\n - I made a new attempt to contact you, but got no response,'+
    '\n - Since the case has already been rescheduled and we have not received a response from the advertiser, it will be closed. '  , 
  nextAction: ''+
    ' - The case will be closed.'
}, {
  indice: 'rescheduled - exception', 
  onCall: ''+
    ' - contact the advertiser,'+
    '\n -informed that he had an unforeseen event, XXXXXX, and could not attend the meeting, and requested to reschedule it,'+
    '\n - case rescheduled as an exception for day DDMM_HHMM.'+
    '\n - Advertiser aware that the case was rescheduled as an exception and that if it is not available on the day, the case will be closed.', 
  nextAction: ''+
    ' - The case will be rescheduled.'
},{
  indice: 'Rescheduled - Request by email ', 
  onCall: ''+
    ' - advertiser informs by email that he will not be available for the match due to an unforeseen event, and requests to reschedule in case,'+
    '\n - case rescheduled for the day DD/MM - HH'    , 
  nextAction: ''+
    ' - The case will be rescheduled.'
}, {
  indice: 'Rescheduled - Respond by email', 
  onCall: ''+
    ' - Advertiser responds via email informing the date and time chosen,'+
    '\n - case rescheduled as an exception for the day DDMM_HH .'    , 
  nextAction: ''+
    ' - The case will be rescheduled.'  
}, {
  indice: 'Inative - Reschedule Limit Exceeded', 
  onCall: ''+
    ' - in contact with the advertiser,'+
    '\n - He is aware that the case had already been rescheduled, requests that the case be rescheduled again,'+
    '\n - I explain to the advertiser that following our reservation process, unfortunately the case has already exceeded the number of reschedulings allowed, and it will be necessary to inactivate the case.'+
    '\n - I advise advertisers to open a new case when they are ready to address the requested implementation.', 
  nextAction: ''+
    ' - The case will be closed.'
},{
  indice: '', 
  onCall: '', 
  nextAction: ''
}, {
  indice: '', 
  onCall: '', 
  nextAction: ''
},
                              
]
                              
