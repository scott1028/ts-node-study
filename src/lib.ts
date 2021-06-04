import fs from 'fs';

export const run = () => {
    const a = fs.readFileSync('/root/.bashrc').toString();
    console.log(a);
    return a;
};

export default run;
