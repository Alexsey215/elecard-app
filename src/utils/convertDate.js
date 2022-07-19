export const convertDate = (time) => {
    let date = new Date(time)
    let d = date.getDate().toString().split('')
    let m = (date.getMonth()+1).toString().split('')
    let y = date.getFullYear()
    if(d.length < 2) {
      d.unshift('0')
      d = d.join('')
    } else {
      d = d.join('')
    }
    if(m.length < 2) {
      m.unshift('0')
      m = m.join('')
    } else {
      m = m.join('')
    }
    return (
      `${d}.${m}.${y}`
    )
  }