export default function universityParsingAlgorithm(data){
  let news = []
  let currentDate = new Date()
  let maxDaysForNotifications = 5

  data.forEach(item => {
    let universityName = item.universityName
    let examDate = new Date(item.universityExamDate)
    let applyStartDate = new Date(item.universityApplyStartDate)
    let applyEndDate = new Date(item.universityApplyEndDate)
    let resultsDate = new Date(item.universityResultsDate)
    let selectStartDate = new Date(item.universitSelectStartDate)
    let selectEndDate = new Date(item.universitySelectEndDate)
    let selectionResultsDate = new Date(item.selectionResultsDate)

    //Exam Date
    let remainingExamDate = Math.ceil((examDate-currentDate)/86400000)
    if(remainingExamDate<=maxDaysForNotifications && remainingExamDate>=0){
      news.push({title:`${universityName} sınavına ${remainingExamDate} gün kaldı.`,status:"danger",days:remainingExamDate})
    }else if (remainingExamDate>=-1){
      news.push({title:`${universityName} sınavı bugün.`,status:"danger",days:remainingExamDate})
    }



    //Apply Date
    let remainingApplyStartDate = Math.ceil((applyStartDate-currentDate)/86400000)
    if(remainingApplyStartDate<=maxDaysForNotifications && remainingApplyStartDate>=0){
      news.push({title:`${universityName} sınav başvurularına ${remainingApplyStartDate} gün kaldı.`,status:"danger",days:remainingApplyStartDate})
    }else if (remainingApplyStartDate>=-1){
      news.push({title:`${universityName} sınav başvuruları bugün.`,status:"danger",days:remainingApplyStartDate})}



      let remainingApplyEndDate = Math.ceil((applyEndDate-currentDate)/86400000)
      if(remainingApplyEndDate<=maxDaysForNotifications && remainingApplyEndDate>=0){
        news.push({title:`${universityName} sınav başvuruların bitmesine ${remainingApplyEndDate} gün kaldı.`,status:"danger",days:remainingApplyEndDate})
      }else if (remainingApplyEndDate>=-1){
        news.push({title:`${universityName} sınav başvuruları bugün bitiyor.`,status:"danger",days:remainingApplyEndDate})}


  //Exam Release Date
  let remainingExamResultsDate = Math.ceil((resultsDate-currentDate)/86400000)
  if(remainingExamResultsDate<=maxDaysForNotifications && remainingExamResultsDate>=0){
    news.push({title:`${universityName} sınav sonuçlarının açıklanmasına ${remainingExamResultsDate} gün kaldı.`,status:"success",days:remainingExamResultsDate})
  }else if (remainingExamResultsDate>=-1){
    news.push({title:`${universityName} sınav sonuçları bugün açıklanıyor.`,status:"success",days:remainingExamResultsDate})}

  //Select Date
  let remainingSelectStartDate = Math.ceil((selectStartDate-currentDate)/86400000)
  if(remainingSelectStartDate<=maxDaysForNotifications && remainingSelectStartDate>=0){
    news.push({title:`${universityName} tercihlerinin açılmasına ${remainingSelectStartDate} gün kaldı.`,status:"warning",days:remainingSelectStartDate})
  }else if (remainingSelectStartDate>=-1){
    news.push({title:`${universityName} tercihleri bugün açılıyor.`,status:"warning",days:remainingSelectStartDate})}


    let remainingSelectEndDate = Math.ceil((selectEndDate-currentDate)/86400000)
  if(remainingSelectEndDate<=maxDaysForNotifications && remainingSelectEndDate>=0){
    news.push({title:`${universityName} tercihlerinin kapanmasına ${remainingSelectEndDate} gün kaldı.`,status:"warning",days:remainingSelectEndDate})
  }else if (remainingSelectEndDate>=-1){
    news.push({title:`${universityName} tercihleri bugün kapanıyor.`,status:"warning",days:remainingSelectEndDate})}


  //Select Release Date
    let remainingSelectionResultsDate = Math.ceil((selectionResultsDate-currentDate)/86400000)
  if(remainingSelectionResultsDate<=maxDaysForNotifications && remainingSelectionResultsDate>=0){
    news.push({title:`${universityName} tercihlerinin açıklanmasına ${remainingSelectionResultsDate} gün kaldı.`,status:"success",days:remainingSelectionResultsDate})
  }else if (remainingSelectionResultsDate>=-1){
    news.push({title:`${universityName} tercihleri bugün açıklanıyor.`,status:"success",days:remainingSelectionResultsDate})}

  });

  return news.sort((a,b)=> a.days-b.days)
}