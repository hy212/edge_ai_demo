addEventListener('fetch', event => {
    event.respondWith(handleRequest(event.request))
})
const headers = {
    "content-type":  "application/json; charset=utf-8",
};
const kvName = 'test';
async function handleRequest(req) {
    const method = req.method;
    console.log("req.method:", method, req);
    try {
        const rspData = {
            code: 0,
            msg: '测试成功',
            time: new Date().getTme()
        };
        return new Response(JSON.stringify(rspData), {
            headers,
        })
    } catch (e) {
        console.log("Got Exception: " + e.stack);
        return new Response("Got Exception: " + e.message, {
            headers,
        });
    }
}
