export function Card({ title, children, className }) {
    return (
        <div className={[
            'glass rounded-3xl shadow-2xl hover:shadow-blue-500/25 transition-all duration-500 border border-white/20 dark:border-white/10 group hover:-translate-y-2 hover:scale-[1.02] relative overflow-hidden',
            className
        ].filter(Boolean).join(' ')}>
            <div className="absolute inset-0 bg-gradient-to-br from-blue-800/15 via-transparent to-black/15 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative flex flex-col gap-6 p-8">
                {title && (
                    <h3 className="text-2xl font-bold text-black dark:text-white group-hover:bg-gradient-to-r group-hover:from-blue-800 group-hover:to-black group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                        {title}
                    </h3>
                )}
                <div className="text-gray-700 dark:text-gray-300">
                    {children}
                </div>
            </div>
        </div>
    );
}
