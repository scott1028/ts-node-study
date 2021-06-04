(async () => {
    console.log('web is starting!');
    const [resp] = await Promise.all([
        new Promise(res => setTimeout(() => res(5000), 5000)),
    ]);
    console.log('resp:', resp);
})();
