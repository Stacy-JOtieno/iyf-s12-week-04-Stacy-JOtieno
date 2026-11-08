// ===== Warm-up: parse and stringify =====
const json = '{"name":"Wanjiku","grades":{"math":88,"english":92}}';

// Text -> object
const student = JSON.parse(json);
console.log("Math grade:", student.grades.math);      // 88

// Object -> text (2 = indent for readability)
const backToText = JSON.stringify(student, null, 2);
console.log(backToText);
console.log("Type:", typeof backToText);              // string

// ===== Exercise: posts =====
const postsJson = '[{"id":1,"title":"Welcome","likes":12,"published":true},{"id":2,"title":"Draft ideas","likes":0,"published":false},{"id":3,"title":"Week 4 recap","likes":30,"published":true}]';

// 1. Parse into an array
const posts = JSON.parse(postsJson);
console.log("1. Parsed:", posts);
console.log("Is array?", Array.isArray(posts));      // true

// 2. Keep only published posts
const publishedPosts = posts.filter(post => post.published);
console.log("2. Published:", publishedPosts);
// Welcome (12), Week 4 recap (30)

// 3. Sort by likes, highest first
publishedPosts.sort((a, b) => b.likes - a.likes);
console.log("3. Sorted by likes:", publishedPosts);
// Week 4 recap (30), Welcome (12)

// 4. Map to strings like "Week 4 recap (30 likes)"
const postSummaries = publishedPosts.map(post => `${post.title} (${post.likes} likes)`);
console.log("4. Summaries:", postSummaries);
// ["Week 4 recap (30 likes)", "Welcome (12 likes)"]

// 5. Stringify the filtered array back to text
const publishedJson = JSON.stringify(publishedPosts, null, 2);
console.log("5. Back to JSON:");
console.log(publishedJson);
console.log("Type:", typeof publishedJson);          // string

// ===== Error handling: invalid JSON =====
function safeParse(text) {
    try {
        return JSON.parse(text);
    } catch (error) {
        console.log("Invalid JSON:", error.name);    // SyntaxError
        return null;
    }
}

console.log(safeParse('{"name": "Amina"}'));         // { name: "Amina" }
console.log(safeParse("{'name': 'Amina'}"));         // single quotes -> SyntaxError, then null
console.log(safeParse('{"name": "Amina",}'));        // trailing comma -> SyntaxError, then null