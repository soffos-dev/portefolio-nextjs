export const Footer = () => {

    return(
        <footer className="bg-gray-900 border-t border-gray-700 p-2 sm:p-3 font-mono fixed bottom-0 left-0 right-0 r-10">
            <div className="max-w-screen-xl mx-auto flex flex-col sm:flex-row items-center justify-between text-xs">
                <div className="hidden sm:flex items-center space-x-4 text-gray-400">
                    <span>Session: active</span>
                    <span>⏺</span>
                    <span className="text-green-400">Connected</span>
                </div>
                <div className="hidden sm:flex items-center space-x-2 text-gray-400">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                    <span>Fedora ⏺ System OK</span>
                </div>
            </div>
        </footer>
    );
};
