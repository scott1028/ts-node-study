import fs from 'fs';

export interface Model {
    name: String
    value: Number
}

export const run = (value: Model) => {
    const a = fs.readFileSync('/root/.bashrc').toString();
    console.log(a, value);
    return a;
};

export default run;
