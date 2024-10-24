const { readFile, writeFile } = require('fs');

readFile('./content/test.txt', 'utf8', (err, result) => {
    if (err) {
        console.log(err);
        return;
    }
    const first = result; // corrected to 'first'

    readFile('./content/fisrt.txt', 'utf8', (err, result) => {
        if (err) {
            console.log(err);
            return;
        }
        const second = result; // renamed to avoid confusion

        // Writing the result after both files are read
        writeFile('./content/result-async.txt', 
            `Here are the results: ${first}, ${second}`, 
            (err) => {
                if (err) {
                    console.log(err);
                    return;
                }
                console.log('File written successfully');
            }
        );
    });
});
