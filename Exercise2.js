var suma = 0
var largo = process.argv.length

for (var i = 2; i < Number(largo); i++) {
	suma = suma + Number(process.argv[i])
}
console.log(suma)
