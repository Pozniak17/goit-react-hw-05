import { Outlet } from "react-router-dom";
import { Container, Header, Logo, List, Link } from "./SharedLayout.styled";
import { Suspense } from "react";

export const SharedLayout = () => {
  return (
    <Container>
      <Header>
        <Logo>
          <span role="img" aria-label="computer icon">
            🎬
          </span>{" "}
          FilmUA Store
        </Logo>

        <nav>
          <List>
            <li>
              <Link to="/">Home</Link>
            </li>

            <li>
              <Link to="/movies">Movies</Link>
            </li>

            <li>
              <Link to="/library">My Library</Link>
            </li>
          </List>
        </nav>
      </Header>

      <main>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </main>
    </Container>
  );
};
