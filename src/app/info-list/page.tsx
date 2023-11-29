'use client';




export default function InfoList() {
    return (
        <div className="container mx-auto p-4 h-full">
            <header className="bg-gray-100 p-4 flex justify-start items-center">
                <h1 className="text-2xl bold">Chips</h1>
                <nav className="ps-5">
                    <a href="/" className="text-blue-500 hover:text-blue-700 p-2">Home</a>
                    <a href="/results" className="text-blue-500 hover:text-blue-700 p-2">Results</a>
                </nav>
            </header>
            <h2 className="text-2xl font-bold px-4 py-5">Information List</h2>
            <hr className="py-4 border-t" />
            <main className="flex flex-wrap -m-2 pt-5 px-3 mx-5">
                <div className="w-full md:w-1/2 p-2">
                    <div className="bg-white rounded shadow p-5">
                        <h3 className="text-xl font-bold">Device Permissions and Collected Data</h3>
                        <ul className="list-disc list-inside text-gray-600 pt-2">
                            <li>This is a simple web app for searching terms and conditions.</li>
                            <li>Types of permissions to be accessed</li>
                            <li>Resons for collecting data or accessing permissions</li>
                            <li>How the collection or access will be carried out</li>
                        </ul>
                    </div>
                </div>
                <div className="w-full md:w-1/2 p-2">
                    <div className="bg-white rounded shadow p-5">
                        <h3 className="text-xl font-bold">Data Transform and sharing</h3>
                        <ul className="list-disc list-inside text-gray-600 pt-2">
                            <li>Whether data is shared with third parties</li>
                            <li>Instances of data shareing that do not require</li>
                            <li>Reasons for sharing data</li>
                            <li>Whether theare are channels to disable or opt out for data sharing</li>
                            <li>Whether data is obtained from thrid parties</li>
                        </ul>
                    </div>
                </div>
                <div className="w-full md:w-1/2 p-2">
                    <div className="bg-white rounded shadow p-5">
                        <h3 className="text-xl font-bold">Changes</h3>
                        <ul className="list-disc list-inside text-gray-600 pt-2">
                            <li>
                                Notification Methods:
                                <ul className="list-disc list-inside text-gray-600 pt-2 px-5">
                                    <li>Whether will be notificate</li>
                                    <li>The method of notification</li>
                                    <li>Whether users will be informed before or after updates</li>
                                    <li>Whether additional user consent is required</li>
                                </ul>
                            </li>
                            <li>Content of updates that will not be notified</li>
                            <li>Whether the old verion can still be used</li>
                            <li>Whether there is an archive of historical terms that can be accessed</li>
                        </ul>
                    </div>
                </div>
                <div className="w-full md:w-1/2 p-2">
                    <div className="bg-white rounded shadow p-5">
                        <h3 className="text-xl font-bold">Data Storage and Processing</h3>
                        <ul className="list-disc list-inside text-gray-600 pt-2">
                            <li>
                                Data Storage
                                <ul className="list-disc list-inside text-gray-600 pt-2 px-5">
                                    <li>Types of data stored</li>
                                    <li>The location of storage</li>
                                </ul>
                            </li>
                            <li>
                                Information Processing
                                <ul className="list-disc list-inside text-gray-600 pt-2 px-5">
                                    <li>Whether infomation will be encrypted or annonymization</li>
                                    <li>Types of information subject to encryption or annonymization</li>
                                </ul>
                            </li>
                            <li>Fate of data after service sessation</li>
                            <ul>
                                <li>Whether it will be deleted annonymized</li>
                            </ul>
                            <li>Other pricessing methods
                                <ul className="list-disc list-inside text-gray-600 pt-2 px-5">
                                    <li>Whether there will be transfer or modification</li>
                                    <li>Whether it will be used for trainning AI</li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="w-full md:w-1/2 p-2">
                    <div className="bg-white rounded shadow p-5">
                        <h3 className="text-xl font-bold">Users' Rights to Manage Data</h3>
                        <ul className="list-disc list-inside text-gray-600 pt-2">
                            <li>User Rights of accounts</li>
                            <ul className="list-disc list-inside text-gray-600 pt-2 px-5">
                                <li>Whether users have ownership or usage rights over the account</li>
                                <li>Whether there will be prior notification before reclaiming the account.</li>
                            </ul>
                            <li>User Rights to manage Data and Permissions</li>
                            <ul className="list-disc list-inside text-gray-600 pt-2 px-5">
                                <li>Whether users have the right to modify, delete, correct, query, or withdraw data</li>
                                <li>Whether there are channels provided for users to modify, delete, correct, query or withdraw data</li>
                            </ul>
                            <li>Automatic/Defaults* Content</li>
                            <ul className="list-disc list-inside text-gray-600 pt-2 px-5">
                                <li>Whether automatic renewal is enabled</li>
                                <li>Whethere automatic backup is performed</li>
                                <li>Whethere automatic downloads are initiated</li>
                            </ul>
                        </ul>
                        <p className="text-gray-600 pt-2">*Defaults: Meaning a function that activated and collecting user data or getting the authorities permission defaulity.</p>
                    </div>
                </div>
            </main>
        </div>
    );
}