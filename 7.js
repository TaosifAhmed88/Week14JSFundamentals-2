function generateOtp(){

    let otp = Math.floor(Math.random() * 9000) + 1000;

    return otp;
   
}
let otps = generateOtp();
console.log(`Generated OTP: ${otps}`);