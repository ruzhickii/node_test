const fs = require('fs');
const path = require('path');

// File System !

// 1---------- Make or create Direction -------------!!!

fs.mkdir(path.join(__dirname, 'notes'), err => {
    if(err) throw new Error(err);

    console.log('Direction was created !!!');
});

// 2---------- Create, change and reading all content in file -----------------!!!

fs.writeFile(
    path.join(__dirname, 'notes', 'mynotes.txt'),
    'Hello world, i create this file',
    err => {
        if(err) throw err;
        console.log('File was created !!!');

        fs.appendFile(
            path.join(__dirname, 'notes', 'mynotes.txt'),
            ' Some new content',
            err => {
                if(err) throw err;
                console.log('File was changed !!!');

                fs.readFile(
                    path.join(__dirname, 'notes', 'mynotes.txt'),
                    'utf-8',
                    (err, data) => {
                        if(err) throw err;
                        console.log(data);
                    }
                );
            }
        );
    }
);

// 3------------ Read file ---------------

fs.readFile(
    path.join(__dirname, 'notes', 'mynotes.txt'),
    'utf-8',
    (err, data) => {
        if(err) throw err;
        console.log(data);
    }
);

// 4------------ Rename file -------------

fs.rename(
    path.join(__dirname, 'notes', 'notes.txt'),
    path.join(__dirname, 'notes', 'mynotes.txt'),
    err => {
        if(err) throw err;

        console.log('File was renamed !!!');
    }
);



