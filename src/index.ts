import { run } from './lib';

if (require.main === module) {
    run({ name: "myName", value: 100 });
    console.log('app started!');
}
