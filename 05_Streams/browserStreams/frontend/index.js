const response = await fetch("http://localhost:4000/");
// const data = await response.text();


const decoder = new TextDecoder();
for await(const chunk of response.body) {
    console.log(decoder.decode(chunk))
}
