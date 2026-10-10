import Image from "next/image";
import Link from "next/link";
import { MenuIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
	Sheet,
	SheetClose,
	SheetContent,
	SheetDescription,
	SheetFooter,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from "@/components/ui/sheet";

const menuItems = [
	{ label: "Zimmer", href: "#" },
	{ label: "Angebote", href: "#" },
	{ label: "Kontakt", href: "#" },
];

export function Navbar() {
	return (
		<header className="sticky top-0 z-40 border-b bg-background">
			<div className="mx-auto grid h-16 max-w-5xl grid-cols-[1fr_auto_1fr] items-center gap-2 px-4 sm:gap-4 sm:px-6">
				<div className="flex justify-start">
					<Sheet>
						<SheetTrigger
							render={<Button variant="ghost" size="icon" aria-label="Menü öffnen" />}
						>
							<MenuIcon />
						</SheetTrigger>
						<SheetContent side="top" className="data-[side=top]:h-dvh data-[side=top]:border-b-0">
							<SheetHeader>
								<SheetTitle>Menü</SheetTitle>
								<SheetDescription className="sr-only">Hauptnavigation</SheetDescription>
							</SheetHeader>
							<nav className="flex flex-col gap-2 px-8">
								{menuItems.map((item) => (
									<SheetClose
										key={item.label}
										nativeButton={false}
										render={<Link href={item.href} />}
										className="py-2 text-base hover:text-muted-foreground"
									>
										{item.label}
									</SheetClose>
								))}
							</nav>
							<SheetFooter className="sm:hidden">
								<Button variant="ghost">Anfragen</Button>
							</SheetFooter>
						</SheetContent>
					</Sheet>
				</div>

				<Link href="/">
					<Image
						src="/logo-sm.svg"
						alt="Das Traunsee"
						width={339}
						height={95}
						priority
						className="h-6 w-auto sm:h-8"
					/>
				</Link>

				<div className="flex items-center justify-end gap-2">
					<Button variant="ghost" className="hidden sm:inline-flex">
						Anfragen
					</Button>
					<Button variant="outline">Buchen</Button>
				</div>
			</div>
		</header>
	);
}
