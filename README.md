# React Stream Schedule Client

Created a new react app

```bash
npx create-react-app react-scheduler-client
```

or clone repo.

## Add React Router
```bash
yarn add react-router-dom
```

Start with clean slate so remove the following files
-App.css
-App.test.js
-Index.css
-logo.svg
-reportWebVitals.js
-setupTests.js

Also clear out App.js all but outer Div. And remove references to deleted files in index and app.js. So remove imports and function calls to those components, css and logos that were just deleted.

Start react dev server to test

```bash
yarn start
```

New Stream Form container with route 'user/:userId/streams/new'?

## AddStreamForm

When we try to make a POST request without having an associated user for our Stream we get a 422 Unprocessable Entity error in our Inspector Network tab. This indicates a problem in the API, in our Rails controllers. First, check strong parameters in the Stream controller.

We can make a current_user by making a new user instance like so:

```rb
class ApplicationController < ActionController::API

    def current_user 
        User.first_or_create(email: 'test@test.com', password: 'password')
    end
    
end
```

Then in our Stream controller an instance of our Stream is created as an association of the current_user.

```rb
  def create
    @stream = current_user.streams.build(stream_params)

    if @stream.save
      render json: @stream, status: :created, location: @stream
    else
      render json: @stream.errors, status: :unprocessable_entity
    end
  end
  ```

  Since I am creating an instance of our stream based on the current_user I don't need to include :user_id as part of the strong params because the user will be already attached when creating the stream instance rather than being passed as part of making the stream instance.

  If we had another id such as an associated, such as if the stream also belong_to a group and we needed a group id passed when we make our Post request we could add the :group_id into our stream_params.

  So now when we submit the form the data is persisted to the database!

  # Next we make our views for Show each individual Stream. (a details page if you will)

  ```bash
  touch src/containers/StreamShowContainer.js
  ```

  This component will fetch from our api based on the element id requested to our stream controller. Something like 
  ```
  fetch('http://localhost:3001/streams/1)


# Add details about Redux









