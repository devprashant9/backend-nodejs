const input = document.querySelector("input");


const decoder = new TextDecoder();

input.addEventListener("change", async () => {
  const file = input.files[0];

  // const str = await file.text();
  // console.log(str);


  const readStream = file.stream();
  const reader = readStream.getReader();

  const result1 = await reader.read(); // only single chunk
  console.log(result1);

  console.log(decoder.decode(result1.value));

  const result2 = await reader.read(); // only single chunk
  console.log(result2);

  // we can use for-await loop instead of manual typing it multiple times

  console.log(decoder.decode(result2?.value));




  console.log(file);
});
