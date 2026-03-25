import React from 'react';

const ExperienceSec = () => {
    const experiences = [
        {
            year: "July 2022 - Present",
            title: "Cloud Infrastructure Engineer",
            company: "www.dxc.com",
            type: "Fulltime - Remote",
            description: 
            <p className="leading-relaxed text-base">
            <ul>
                        <li>Managed AWS infrastructure (EC2, VPC, S3, IAM, CloudWatch)
                            across multi-account environments, ensuring high availability
                            and security for production workloads. </li>
                        <li>Handled end-to-end incident management using ServiceNow;
                            resolved 20+ monthly issues (EC2, IAM, VPC) while meeting SLA
                            targets.</li>
                        <li>
                            Performed server patching, backups, and release activities;
                            supported AWS Backup and snapshot recovery with defined
                            RTO/RPO.</li>
                        <li>
                            Configured IAM roles, policies, and security controls for 100+
                            accounts; enforced MFA and least-privilege access.
                            Used Terraform to provision and standardize infrastructure
                            (EC2, VPC, IAM, S3), reducing manual effort and improving
                            consistency.</li>
                        <li>Built CloudWatch dashboards and alerts; integrated SNS
                            notifications, reducing incident detection time by 40%.
                            Created SOPs and runbooks; collaborated with teams to
                            improve operational efficiency and onboarding.</li>
                        <li>Performed Linux diagnostics and automated EC2 tasks using
                            Bash (health checks, start/stop, snapshots, log archival).</li>
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