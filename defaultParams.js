const getDefault = (
  a,
  b = 4,
  c = {
    name: "affan",
    professionl: "Javascript Developer",
  }
) => {
  return console.log(a, b, c);
};

getDefault(3, undefined, {
  name: undefined,
  professionl: "UI/UX Developer",
});

// Expected Return
// 3 4 { name: undefined, professionl: 'UI/UX Developer' }