function manageGuild(input) {
    const guild = {};
    const n = Number(input.shift());

    for (let i = 0; i < n; i++) {
        const [name, role, skillsStr] = input.shift().split(' ');
        guild[name] = {
            role,
            skills: new Set(skillsStr.split(','))
        };
    }

    for (const command of input) {
        if (command === "End") break;

        const [action, memberName, arg2, arg3] = command.split(" / ");

        if (action === "Perform") {
            const role = arg2;
            const skill = arg3;

            if (guild[memberName].role === role && guild[memberName].skills.has(skill)) {
                console.log(`${memberName} has successfully performed the skill: ${skill}!`);
            } else {
                console.log(`${memberName} cannot perform the skill: ${skill}.`);
            }

        } else if (action === "Reassign") {
            const newRole = arg2;
            guild[memberName].role = newRole;
            console.log(`${memberName} has been reassigned to: ${newRole}`);

        } else if (action === "Learn Skill") {
            const newSkill = arg2;
            if (guild[memberName].skills.has(newSkill)) {
                console.log(`${memberName} already knows the skill: ${newSkill}.`);
            } else {
                guild[memberName].skills.add(newSkill);
                console.log(`${memberName} has learned a new skill: ${newSkill}.`);
            }
        }
    }

    for (const [name, data] of Object.entries(guild)) {
        const sortedSkills = [...data.skills].sort((a, b) => a.localeCompare(b));
        console.log(`Guild Member: ${name}, Role: ${data.role}, Skills: ${sortedSkills.join(', ')}`);
    }
}
