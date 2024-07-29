CREATE TABLE article
(
    `ArticleID`                       BIGINT UNSIGNED NOT NULL AUTO_INCREMENT COMMENT 'article_ID',
    `CreatedAt`               TIMESTAMP NOT NULL default current_timestamp COMMENT 'レコード作成日時',
    `UpdatedAt`               TIMESTAMP NOT NULL default current_timestamp on update current_timestamp COMMENT 'レコード修正日時',
    `Title`              VARCHAR(50) NOT NULL COMMENT 'タイトル',
    `Body`      VARCHAR(400) NOT NULL COMMENT '内容',
    PRIMARY  KEY (`ArticleID`),
    UNIQUE   KEY `uk_article_title` (`Title`) USING BTREE
);



CREATE TABLE user
(
    `UserID`                       BIGINT UNSIGNED NOT NULL AUTO_INCREMENT COMMENT 'user_ID',
    `CreatedAt`               TIMESTAMP NOT NULL default current_timestamp COMMENT 'レコード作成日時',
    `UpdatedAt`               TIMESTAMP NOT NULL default current_timestamp on update current_timestamp COMMENT 'レコード修正日時',
    `Name`              VARCHAR(50) NOT NULL COMMENT 'name',
    `Email`      VARCHAR(400) NOT NULL COMMENT 'email',
    PRIMARY  KEY (`UserID`),
    UNIQUE   KEY `uk_user_name` (`Name`) USING BTREE
);

