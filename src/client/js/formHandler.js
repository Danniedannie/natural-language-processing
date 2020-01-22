// how can this be made into a class?
// in the futre you would pass the form data
async function handleSubmit(event) {
  event.preventDefault();
  await fetch("/test", {
    method: "POST"
  });
}

async function getAnalysis() {
  const request = await fetch("/all");
  const data = await request.json();
  console.log("got it", data);
}

export { handleSubmit, getAnalysis };
