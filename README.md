# Blog
(注: 日本語版のREADMEを見たい方は[こちら](https://github.com/kaitokimuraofficial/blog/blob/main/README.ja.md)をご覧ください)

- Website: http://www.kaitokimura.com/

This repository stores codes of application parts of my blog, [`kaitokimura.com`](http://www.kaitokimura.com/).
The infrastructure part is stored in my other GitHub repository, [`blog-infra`](https://github.com/kaitokimuraofficial/blog-infra)

## Architecture
### Frontend
I am the one who uses [`TypeScript`](https://www.typescriptlang.org/) mainly as Frontend languages. Following facts below is enough to use this amazing language.
- Type safety because of static typing languages
- Type inference making it easier to develop systems
- Support for JavaScript


### Backend
We use [`Golang`](https://go.dev/doc/) as backend. The reasons for choice are following.
- Efficiency and type safety thanks for static typing compiled languages
- Ease of implementing concurrency processing
- Simple grammar
- The noticeable growing use of Golang in programming communities


### Database
[`MySQL`](https://dev.mysql.com/), one of the world's most popular open source databases is used in this repository. What makes me think MySQL is the best choice for this application is listed below.
- Being one of the most commonly used databases
- Having various examples of using Golang and MySQL, like Golang official document Tutorial, [Tutorial: Accessing a relational database](https://go.dev/doc/tutorial/database-access)



## For Developers and HR manager (in Process of Job Interview)
If you want to see how this application works in your desktop in details, follow these steps,

```md
1. Open Docker in your desktop
2. At root directory, execute `Make up`
3. After a few seconds, you can see the website launched by this application at [`localhost:3000`](http://localhost:3000)
```

Again, the application is running in the production environment at [`kaitokimura.com`](https:www.kaitokimura.com).
