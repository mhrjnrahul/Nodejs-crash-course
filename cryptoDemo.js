import crypto from 'crypto';

//create hash
const hash = crypto.createHash('sha256');
//update hash with data
hash.update('Hello, World!');
//get the digest
const digest = hash.digest('hex');
// console.log('SHA-256 Hash:', digest);


//random bytes
crypto.randomBytes(16, (err, buffer) => {
    if (err) {
        console.error('Error generating random bytes:', err);
        return;
    }
    const randomBytes = buffer.toString('hex');
    // console.log('Random Bytes:', randomBytes);
});

//createCipgeriv and createDecipheriv
const algorithm = 'aes-256-cbc';
const key = crypto.randomBytes(32); // 256 bits
const iv = crypto.randomBytes(16); // 128 bits

const cipher = crypto.createCipheriv(algorithm, key, iv);
const decipher = crypto.createDecipheriv(algorithm, key, iv);
const text = 'Hello, World!';
// Encrypt
let encrypted = cipher.update(text, 'utf8', 'hex');
encrypted += cipher.final('hex');
console.log('Encrypted:', encrypted);

// Decrypt
let decrypted = decipher.update(encrypted, 'hex', 'utf8');
decrypted += decipher.final('utf8');
console.log('Decrypted:', decrypted);