# Schema Information

## users
column name     | data type | details
----------------|---------  |---------
id              | integer   | not null, primary key
email           | string    | not null, unique
password_digest | string    | not null
session_token   | string    | not null
name            | string    | not null
location        | string    | 
description     | text      |

## tracks
column name | data type | details
------------|-----------|---------
id          | integer   | not null, primary key
user_id     | integer   | not null, foreign key
title       | string    | not null
description | text      |
source      | text      | not null

## followings
column name  | data type | details
-------------|-----------|---------
id           | integer   | not null, primary key
follower_id  | integer   | not null, foreign key (references users)
following_id | integer   | not null, foreign key (references users)

## likes
column name | data type | details
------------|-----------|---------
id          | integer   | not null, primary key
track_id    | integer   | not null, foreign key (references tracks)
follower_id | integer   | not null, foreign key (references users)
