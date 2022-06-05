const createGame = require('../functions/createGame')

test('test create and save game', () => {
    const newGame = createGame({
        name: "name",
        short_description: "short_description",
        header_image: "header_image",
        release_date: "release_date",
        last_updated: Date.now(),
    })
    expect(newGame.name).toBe("name");
    expect(newGame.short_description).toBe("short_description");
    expect(newGame.header_image).toBe("header_image");
    expect(newGame.release_date).toBe("release_date");
});