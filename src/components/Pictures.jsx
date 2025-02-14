'use client';
import React from 'react';
import Image from 'next/image';

function Pictures() {
    return (
        <div className="hero-image relative  -top-[50px]">
            <div className="coding-illustration -z-1">
                {/* Programming Language/Tech Logos */}
                <Image src="/images/html5.svg" className="floating-logo" alt="HTML5" width={50} height={50} />
                <Image src="/images/css3.svg" className="floating-logo" alt="CSS3" width={50} height={50} />
                <Image src="/images/react.svg" className="floating-logo" alt="React" width={50} height={50} />
                <Image src="/images/python.svg" className="floating-logo" alt="Python" width={50} height={50} />
                <Image src="/images/kotlin.svg" className="floating-logo" alt="Kotlin" width={50} height={50} />
                <Image src="/images/csharp.svg" className="floating-logo" alt="C#" width={50} height={50} />
                <Image src="/images/java.svg" className="floating-logo" alt="Java" width={50} height={50} />
                <Image src="/images/js.svg" className="floating-logo" alt="JavaScript" width={50} height={50} />
                <Image src="/images/nodejs.svg" className="floating-logo" alt="Node.js" width={50} height={50} />
                <Image src="/images/obj.svg" className="floating-logo" alt="Object-Oriented" width={50} height={50} />
                <Image src="/images/pycharm.svg" className="floating-logo" alt="Pycharm" width={50} height={50} />
                <Image src="/images/tailwind.svg" className="floating-logo" alt="Tailwind CSS" width={50} height={50} />
                <Image src="/images/typescript.svg" className="floating-logo" alt="TypeScript" width={50} height={50} />

                {/* Coding Symbols */}
                <div className="code-symbol">&lt;/&gt;</div>
                <div className="code-symbol">{`{ }`}</div>
                <div className="code-symbol">[]</div>
                <div className="code-symbol">()</div>

                {/* Binary Trail */}
                <div className="binary-trail">10101</div>
                <div className="binary-trail">01010</div>
                <div className="binary-trail" style={{ animationDelay: '2s', left: '20%' }}>01010</div>
                <div className="binary-trail" style={{ animationDelay: '4s', left: '40%' }}>11001</div>
                <div className="binary-trail" style={{ animationDelay: '6s', left: '60%' }}>00111</div>
            </div>
        </div>
    );
}

export default Pictures;
