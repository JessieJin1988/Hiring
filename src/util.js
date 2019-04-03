// module.exports = function say(){
	// console.log('we are hiring！！！')
// }
export default function say(){
	 return new Promise((resolve, reject) => {
        resolve('ok');
    })
}