import { Popover, PopoverButton, PopoverPanel } from '@headlessui/react';
function Header() {
    return <header className="flex justify-center">
        <HeaderLeft />
        <HeaderCenter />
        <HeaderRight />
    </header>;
}

function HeaderLeft() {
    return <div className="header-left flex">
        <Popover className="">
            <PopoverButton>Shop</PopoverButton>
            <PopoverPanel anchor="bottom" className="flex flex-col">
                <a href="/analytics">Analytics</a>
                <a href="/engagement">Engagement</a>
                <a href="/security">Security</a>
                <a href="/integrations">Integrations</a>
            </PopoverPanel>
        </Popover>
        <a href="">Science</a>
        <a href="">The Beckham Stack</a>
        <a href="">Welcome from David</a>
    </div>;
}

function HeaderCenter() {
    return <div className="header-center">
        <img src="/icons/Header-Logo-New.svg" alt="" />
    </div>;
}
function HeaderRight() {
    return <div className="header-right">
        <button aria-label="Search"><img src="/icons/search.svg" alt="Search Icon" /></button>
        <button aria-label="Cart"><img src="/icons/cart.svg" alt="Cart Icon" /></button>
        <button aria-label="Account"><img src="/icons/account.svg" alt="Account Icon" /></button>
    </div>;
}

export default Header;