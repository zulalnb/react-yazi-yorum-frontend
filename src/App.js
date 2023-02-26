import { BrowserRouter as Router, Route } from "react-router-dom";
import PostList from "./components/PostList";
import PostDetail from "./components/PostDetail";
import AddPost from "./components/AddPost";
import EditPost from "./components/EditPost";

export default function App() {
  return (
    <Router>
      <div className="main_wrapper">
        <header></header>
        <div className="ui raised very padded text container segment">
          <Route path="/" exact component={PostList} />
          <Route path="/posts/:id" exact component={PostDetail} />
          <Route path="/addpost" component={AddPost} />
          <Route path="/posts/:id/edit" component={EditPost} />
        </div>
      </div>
    </Router>
  );
}
