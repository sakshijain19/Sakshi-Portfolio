import React from 'react';

const ExperienceSec = () => {
    const experiences = [
        {
            year: "Nov 2023 - Present",
            title: "Infrastructure Operation Engineer",
            company: "www.dxc.com",
            type: "Fulltime - Remote",
            description: 
            <p className="leading-relaxed text-base">
            <ul>
                <li>Managed and maintained Linux-based production servers supporting enterprise workloads in cloud environment.</li>
                <li>Monitored production infrastructure using monitoring tools and resolved critical alerts to maintain system availability.</li>
                <li>Worked with AWS services including EC2, S3, IAM, and VPC to support cloud infrastructure.</li>
                <li>Investigated infrastructure issues and performed root cause analysis to prevent recurring incidents.</li>
                <li>Supported backup and disaster recovery processes for business-critical systems.</li>
                <li>Collaborated with cross-functional teams to ensure system reliability and uptime.</li>
            </ul>
            </p>
            },
        {
            year: "July 2022 - Oct 2023",
            title: "Associate Service Delivery coordinator",
            company: "www.dxc.com",
            type: "Fulltime - Remote",
            description: 
            <p className="leading-relaxed text-base1">
            <ul>
                <li>Coordinated with infrastructure and support teams to ensure efficient service delivery operations.</li>
                <li>Managed incident tickets and service requests using ServiceNow ITSM platform.</li>
                <li>Assisted in monitoring service performance and maintaining SLA compliance.</li>
                <li>Communicated with stakeholders regarding issue resolution, service updates, and operational status.</li>
                <li>Prepared operational documentation and reports to support service management processes.</li>
            </ul>
            </p>
        },
    ];

    return (
        <section>
            <div className="py-16 md:py-32">
                <div className="container mx-auto px-4">
                    <div className="flex items-center justify-between gap-2 border-b border-black pb-7 mb-9 md:mb-16">
                        <h2>Experience</h2>
                        <p className="text-xl text-primary">( 02 )</p>
                    </div>

                    <div className="space-y-7 md:space-y-12">
                        {experiences.map((exp, index) => (
                            <div key={index} className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 md:gap-4 xl:gap-8 items-start relative">
                                <div className="">
                                    <h3 className="font-bold mb-2 text-black">{exp.year}</h3>
                                    <h4 className="text-lg font-normal">{exp.title}</h4>
                                </div>

                                <div className=" relative">
                                    {index < experiences.length && (
                                        <div className={`absolute left-0 top-3 w-px ${index < experiences.length - 1 ? 'h-40' : 'h-30'} bg-softGray`}></div>
                                    )}

                                    <div className="no-print absolute left-0 top-0 transform -translate-x-1/2">
                                        <div className={`no-print w-3.5 h-3.5 rounded-full border-1 bg-white flex items-center justify-center ${index === 1 ? 'border-primary' : 'border-black'
                                            }`}>
                                            {index === 1 && (
                                                <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                                            )}
                                        </div>
                                    </div>

                                    <div className="pl-4 lg:pl-7">
                                        <div className="flex items-center gap-2 mb-1">
                                            <span className="text-xl text-black font-normal">{exp.company}</span>
                                        </div>
                                        <p className="text-base font-normal">{exp.type}</p>
                                    </div>
                                </div>

                                <div className="pl-8 sm:pl-0">
                                    <p className="leading-relaxed text-base">{exp.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ExperienceSec;