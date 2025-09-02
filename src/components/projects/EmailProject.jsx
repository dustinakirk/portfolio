import React, { useState, useEffect } from "react";
import ProjectLayout from "../ProjectLayout";
import { Link } from "react-router-dom";
import ProjectImage from "../ProjectImage";

function EmailProject() {
  const [emailInput, setEmailInput] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [showOutput, setShowOutput] = useState(false);

  // Email parsing logic converted from jQuery
  const checkNames = (value) => {
    if (value.indexOf("@") >= 0) {
      clearNames();

      if (value.indexOf("<") >= 0 && value.indexOf(">") >= 0) {
        // Parse name from format: "Name <email@domain.com>"
        let nameContent = value.split('<')[0];
        nameContent = nameContent.replace(/\s*$/, "");
        const names = nameContent.split(' ');
        const nameLength = names.length;

        if (names[0] && names[nameLength - 1]) {
          setNames(names[0], names[nameLength - 1]);
        }
      } else {
        // Parse from email address itself
        let firstPart = value.split('@')[0];
        if (value.indexOf("<") >= 0) {
          firstPart = firstPart.split('<')[1];
        }

        const periods = firstPart.split('.');
        const dashes = firstPart.split('-');
        const underscores = firstPart.split('_');

        let foundFirstName = "";
        let foundLastName = "";

        // Check periods
        if (periods.length === 2) {
          foundFirstName = periods[0];
          foundLastName = periods[1];
          if (foundFirstName.length > 1 && foundLastName.length > 1) {
            setNames(foundFirstName, foundLastName);
            return;
          }
        } else if (periods.length === 3) {
          foundFirstName = periods[0];
          foundLastName = periods[2];
          if (foundFirstName.length > 1 && foundLastName.length > 1) {
            setNames(foundFirstName, foundLastName);
            return;
          }
        }

        // Check underscores
        if (underscores.length === 2) {
          foundFirstName = underscores[0];
          foundLastName = underscores[1];
          if (foundFirstName.length > 1 && foundLastName.length > 1) {
            setNames(foundFirstName, foundLastName);
            return;
          }
        } else if (underscores.length === 3) {
          foundFirstName = underscores[0];
          foundLastName = underscores[2];
          if (foundFirstName.length > 1 && foundLastName.length > 1) {
            setNames(foundFirstName, foundLastName);
            return;
          }
        }

        // Check dashes
        if (dashes.length === 2) {
          foundFirstName = dashes[0];
          foundLastName = dashes[1];
          if (foundFirstName.length > 1 && foundLastName.length > 1) {
            setNames(foundFirstName, foundLastName);
            return;
          }
        } else if (dashes.length === 3) {
          foundFirstName = dashes[0];
          foundLastName = dashes[2];
          if (foundFirstName.length > 1 && foundLastName.length > 1) {
            setNames(foundFirstName, foundLastName);
            return;
          }
        }
      }
    } else {
      clearNames();
    }
  };

  const setNames = (first, last) => {
    // Capitalize first letter
    const capitalizeFirst = (str) => str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
    setFirstName(capitalizeFirst(first));
    setLastName(capitalizeFirst(last));
    setShowOutput(true);
  };

  const clearNames = () => {
    setShowOutput(false);
    setFirstName("");
    setLastName("");
  };

  const handleInputChange = (e) => {
    const value = e.target.value;
    setEmailInput(value);
    checkNames(value);
  };

  return (
    <ProjectLayout
      title="Generative Email & User Management"
      subtitle="Making a micro-efficiency a moment of delight by utilizing name data already existing in 70% of corporate emails."
      projectId="email"
    >
      <div className="space-y-8">
        {/* Introduction */}
        <div className="prose prose-lg max-w-none">
          <p className="text-black/80 dark:text-white/80">
            One of my favorite things as a product designer is identifying ways to make a user's experience delightful. 
            And when an opportunity presents itself to add a little delight, particularly when the effort required is minimal, 
            I get very excited. Such is the case when working on a feature which included the ability to send invites to users.
          </p>
          
          <p className="text-black/80 dark:text-white/80 mt-4">
            In this particular case, administrators would send invites to future users by entering their email address. 
            A valid email address was the only required piece of information necessary before sending the invite. 
            Once an invite was received by the user, they would click a link and register their account by entering 
            their First Name, Last Name, Company, and Title.
          </p>
        </div>

        {/* Invite Form Image */}
        <div className="rounded-2xl overflow-hidden bg-white/60 dark:bg-white/5 p-8 flex justify-center">
          <ProjectImage 
            src="/projects/email/invite_form.svg" 
            alt="Email invite form interface for administrators to send user invitations"
          />
        </div>

        {/* Efficiency Section */}
        <div className="prose prose-lg max-w-none">
          <p className="text-black/80 dark:text-white/80">
            One of the <Link to="/projects/pillars" className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300">
              4 Pillars of Enterprise Application Design
            </Link> is efficiency and there are many ways to improve product efficiency. 
            Specifically applicable to this scenario is not requiring a user to enter the same information twice 
            and provide meaningful default values. With this feature being a part of an enterprise product, 
            the users who would be sent invites are almost always corporate email addresses and follow a relatively 
            standard practice of including both the first name and last name in the email address.
          </p>
          
          <p className="text-black/80 dark:text-white/80 mt-4">
            To verify this theory, I ran a query of our customers and found the following:
          </p>
        </div>

        {/* Statistics Image */}
        <div className="rounded-2xl overflow-hidden bg-white/60 dark:bg-white/5 p-8 flex justify-center">
          <ProjectImage 
            src="/projects/email/stats.svg" 
            alt="Statistics showing 70% of corporate email addresses contain parseable first and last names"
          />
        </div>

        {/* Parsing Details */}
        <div className="prose prose-lg max-w-none">
          <p className="text-black/80 dark:text-white/80">
            Over 70% of customers utilize email addresses that contain the first and last names and can be easily 
            parsed programmatically. This would allow the first and last names to be derived for the vast majority 
            of users using this specific feature. Support for email addresses can be parsed for the following:
          </p>
          
          <ul className="mt-4 list-disc pl-6 text-black/80 dark:text-white/80">
            <li>{"{first} . {last} @"}</li>
            <li>{"{first} - {last} @"}</li>
            <li>{"{first} _ {last} @"}</li>
            <li>{"{first} . * . {last} @"}</li>
            <li>{"{first} - * - {last} @"}</li>
            <li>{"{first} _ * _ {last} @"}</li>
          </ul>

          <p className="text-black/80 dark:text-white/80 mt-4">
            Additionally, when copy and pasting email addresses from emails or address books, 
            the copied format often contains the name which can be parsed as well. 
            In this case, the provided name is used regardless of the email address format.
          </p>
          
          <ul className="mt-4 list-disc pl-6 text-black/80 dark:text-white/80">
            <li>{"Joe Smith <smith@acme.com>"}</li>
            <li>{"Jane Doe <jdoe@acme.com>"}</li>
          </ul>

          <p className="text-black/80 dark:text-white/80 mt-4">
            The derivation of names helps in two significant ways. The first benefit comes to the administrator 
            who is entering email addresses. Once an email is entered a record is created which they will see 
            in their system. While the user has not yet registered, the only information in the record would be 
            the email address. This makes it difficult to parse who is who simply based on email address. 
            By having a first and last name for each user, it is much clearer who a record belongs to. 
            Secondly, once the invited user goes to register, for over 70% of users, the first name and last name 
            would be defaulted in and the only new information necessary to enter would be their job title. 
            Users would still have the option to edit or remove the name fields, but for the most part would be 
            ready to move on without a second thought.
          </p>
        </div>

        {/* Users Image */}
        <div className="rounded-2xl overflow-hidden border border-black/10 dark:border-white/10 bg-white/60 dark:bg-white/5 p-8 flex justify-center">
          <ProjectImage 
            src="/projects/email/users.png" 
            alt="User registration form with pre-filled names derived from email addresses for improved efficiency"
            className="rounded-lg shadow-lg"
          />
        </div>

        {/* Considerations */}
        <div className="prose prose-lg max-w-none">
          <p className="text-black/80 dark:text-white/80">
            There is one aspect worth considering when taking this approach and that is how much the administrator 
            will feel compelled to either fill out the first and last name if it is missing or appears incorrect. 
            If the first and last name are presented as input fields, then the administrator may feel obligated 
            to enter the values which in this scenario is unnecessary and completely optional. Is it then a matter 
            of displaying messaging to make sure the administrator understands it is optional? And if the names 
            are shown, but not editable, then that may be a point of frustration to the administrator.
          </p>
          
          <p className="text-black/80 dark:text-white/80 mt-4">
            The approach taken was to not present the derived names as text or inputs at the point of email entry. 
            For the administrator in this step, the importance was on entering the email addresses of users and 
            moving on. The complexity and possible confusion outweighed any benefit of the admin seeing the names 
            at this stage. Once submitted, then the derived names would appear in the system and should the admin 
            want to edit a user record at that point, they could... but any sense of obligation should be 
            diminished greatly.
          </p>
          
          <p className="text-black/80 dark:text-white/80 mt-4">
            The resulting solution was to derive names from email after the emails were submitted, and only derive 
            the names from email addresses which followed a very common and structured format such as to not create 
            more work for anyone. Doing so benefited both the administrator by not having empty records and over 
            70% of invited users who would not have to enter information that already existed in the system.
          </p>
        </div>

        {/* Interactive Demo */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-6">Interactive Demo</h2>
          
          <div className="rounded-2xl border border-black/10 dark:border-white/10 bg-gradient-to-br from-white/80 to-white/40 dark:from-white/10 dark:to-white/5 p-8">
            <div className="max-w-md mx-auto">
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Email:
                  </label>
                  <input
                    type="text"
                    placeholder="user@company.com"
                    value={emailInput}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 rounded-lg border border-black/10 dark:border-white/10 bg-white dark:bg-white/5 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                
                {showOutput && (
                  <div className="mt-4 p-4 rounded-lg bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800">
                    <div className="space-y-2">
                      <div>
                        <span className="font-medium">First Name: </span>
                        <span className="text-green-700 dark:text-green-300">{firstName}</span>
                      </div>
                      <div>
                        <span className="font-medium">Last Name: </span>
                        <span className="text-green-700 dark:text-green-300">{lastName}</span>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              
              <p className="mt-4 text-xs text-black/60 dark:text-white/60">
                Try entering email addresses like: john.doe@company.com, jane_smith@example.com, 
                or "Bob Johnson &lt;bob-johnson@test.com&gt;"
              </p>
            </div>
          </div>
        </div>
      </div>
    </ProjectLayout>
  );
}

export default EmailProject;