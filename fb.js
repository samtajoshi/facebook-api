==== Query
  curl -i -X GET \
   "https://graph.facebook.com/v4.0/me?fields=name%2Cabout%2Cquotes%2Cpicture%2Caddress%2Cbirthday%2Cemail%2Cgender%2Chometown%2Clocation%2Clanguages%2Ceducation%2Crelationship_status%2Csecurity_settings%2Cshort_name%2Csports%2Ctest_group&access_token=<access token sanitized>"
==== Access Token Info
  {
    "perms": [
      "user_birthday",
      "user_hometown",
      "user_location",
      "user_photos",
      "user_status",
      "user_posts",
      "user_gender",
      "email",
      "public_profile"
    ],
    "user_id": 2566294476988186,
    "app_id": 410023076374983
  }
==== Parameters
- Query Parameters


  {
    "fields": "name,about,quotes,picture,address,birthday,email,gender,hometown,location,languages,education,relationship_status,security_settings,short_name,sports,test_group"
  }
- POST Parameters


  {}
==== Response
  {
    "name": "Samta Joshi",
    "picture": {
      "data": {
        "height": 50,
        "is_silhouette": false,
        "url": "https://platform-lookaside.fbsbx.com/platform/profilepic/?asid=2566294476988186&height=50&width=50&ext=1572976857&hash=AeTrKYuMQfatydd5",
        "width": 50
      }
    },
    "birthday": "05/05/1996",
    "email": "5chhavijoshi@gmail.com",
    "gender": "female",
    "hometown": {
      "id": "108119239209673",
      "name": "Bhilwara"
    },
    "location": {
      "id": "106306812739694",
      "name": "Jaipur, Rajasthan"
    },
    "security_settings": {
      "secure_browsing": {
        "enabled": true
      }
    },
    "short_name": "Samta",
    "test_group": 2,
    "id": "2566294476988186",
    "__debug__": {
      "messages": [
        {
          "message": "The field 'quotes' is only accessible on the User object after the user grants the 'user_likes' permission.",
          "type": "warning"
        },
        {
          "message": "The field 'languages' is only accessible on the User object after the user grants the 'user_likes' permission.",
          "type": "warning"
        },
        {
          "message": "The field 'sports' is only accessible on the User object after the user grants the 'user_likes' permission.",
          "type": "warning"
        }
      ]
    }
  }
==== Debug Information from Graph API Explorer
- https://developers.facebook.com/tools/explorer/?method=GET&path=me%3Ffields%3Dname%2Cabout%2Cquotes%2Cpicture%2Caddress%2Cbirthday%2Cemail%2Cgender%2Chometown%2Clocation%2Clanguages%2Ceducation%2Crelationship_status%2Csecurity_settings%2Cshort_name%2Csports%2Ctest_group&version=v4.0