async function abcd(){
  let raw  = await fetch(`https://randomuser.me/api/`)
       let a = await raw.json();
    console.log(a)
    
}
abcd();