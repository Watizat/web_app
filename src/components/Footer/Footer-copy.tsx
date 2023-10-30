import Container from '../Container/Container';
import Links from './Links';

export default function Footer() {
  return (
    <footer className="absolute bottom-0 flex-col items-center justify-center hidden w-full mb-6 font-sans bg-transparent h-footerHeightMax md:h-footerHeight text-slate-600 sm:flex">
      <Container>
        <div className="flex w-full grow">
          <Links />
        </div>
      </Container>
    </footer>
  );
}
