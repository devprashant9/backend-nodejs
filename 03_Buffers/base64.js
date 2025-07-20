// base64 Encoding

// Includes
// 'A - Z' | 'a - z' | '0 - 9' | '+' ans '/'
// = padding
// starts from 0 to 63 i.e. 2 ^ 6
// maxValue = 111111

// base64 requires a minimum of 3 bytes in order to wrk
// increases file size
// written using UTF-8

// converts binary to string

console.log(btoa("h"))


// h in binary
// 0 1 1 0 1 0 0 0
// grouping in 6

//  0 1 1 0 1 0       0 0 0 0 0 0    0 0 0 0 0 0    0 0 0 0 0 0
//          base64 encoding             
//      a                   A           =           =
// thus aA==