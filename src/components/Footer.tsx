import { Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-custom-bg py-8 border-t border-custom-border">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <p className="text-custom-muted flex items-center justify-center gap-1 text-sm">
          © 2026 Jayantan AD. Built with <Heart className="w-4 h-4 text-custom-accent fill-custom-accent" /> using React & Firebase Hosting.
        </p>
      </div>
    </footer>
  );
}
