const getDate = () => {
  const NUMBERS_OF_A_DAY = 86400000
  const regex = /T[0-9]+[:]+[0-9]+[:]+[0-9]+[.]+[0-9]+[Z]/    
  
  var today = new Date(Date.now()).toISOString()
  var yesterday = new Date(Date.now() - NUMBERS_OF_A_DAY).toISOString()

  today = today.replace(regex, 'T00:00:00Z')
  yesterday = yesterday.replace(regex, 'T00:00:00Z')

  console.log(today, yesterday);
  return {today, yesterday} 
}

export default getDate