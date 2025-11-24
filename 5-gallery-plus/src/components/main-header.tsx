import cx from "classnames";
import { Link } from "react-router";
import Logo from "../assets/images/galeria-plus-full-logo.svg?react";
import Container from "./container";
import Button from "./button";
import PhotosSearch from "./photos-search";
import Divider from "./divider";

interface MainHeaderProps extends React.ComponentProps<typeof Container> { }

export default function MainHeader({ className, ...props }: MainHeaderProps) {
  return (
    <Container
      as="header"
      className={cx("flex justify-between items-center gap-10", className)}
      {...props}
    >
      <Link to="/">
        <Logo className="h-5" {...props} />
      </Link>

      <PhotosSearch />

      <Divider orientation="vertical" className="h-10" />

      <div className="flex items-center gap-3">
        <Button>Nova Foto</Button>
        <Button variant="secondary">Criar álbum</Button>
      </div>
    </Container>
  );
}
