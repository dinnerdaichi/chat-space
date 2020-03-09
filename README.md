# README

This README would normally document whatever steps are necessary to get the
application up and running.

Things you may want to cover:

* Ruby version

* System dependencies

* Configuration

* Database creation

* Database initialization

* How to run the test suite

* Services (job queues, cache servers, search engines, etc.)

* Deployment instructions

* ...


##usersテーブル
|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false, foreign_key: true|
|name|string|null: false, foreign_key: true|
|mail|string|null: false, foreign_key: true|
|password|string|null: false, foreign_key: true|
|massages|string|null: false, foreign_key: true|


## Association
- has_many:groups_users
- has_many:groups, through: :groups_users
- has_many:messages


##groupsテーブル
|Column|Type|Options|
|------|----|-------|
|group_id|integer|null: false, foreign_key: true|
|user_id|integer|null: false, foreign_key: true|
|messages|integer|null: false, foreign_key: true|


## Association
- has_many:groups_users
- has_many:users through: :groups_users
- has_many:messages


##messagesテーブル
|Column|Type|Options|
|------|----|-------|
|body|text|null: false, foreign_key: true|
|image|string|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|
|users_id|integer|null: false, foreign_key: true|

## Association
- belong_to:user
- has_many:groups



## groups_usersテーブル

|Column|Type|Options|
|------|----|-------|
|user|references|null: false, foreign_key: true|
|group|references|null: false, foreign_key: true|


### Association
- belongs_to :group
- belongs_to :user
