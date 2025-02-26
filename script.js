const blogPosts = [
    {
        "Title": "Exploring the Mountains",
        "Author": "Anna Karlsson",
        "Time": "2024-11-05",
        "Content": "There’s something magical about venturing into the mountains. The crisp air, the towering peaks, and the peacefulness of nature offer a refreshing escape from daily life. On my latest hike, I found myself surrounded by pine forests, the scent of fresh earth filling the air. As I climbed higher, the view opened up to rolling hills and distant lakes shimmering under the sun. Every step was a reminder of how small we are compared to nature’s vastness. Whether you’re seeking adventure or tranquility, the mountains never disappoint. Bring good boots, plenty of water, and a spirit ready to explore!",
        "Comments" : [
            {
                "By" : "Mike Johnson",
                "Content" : "Amazing content",
                "Timestamp" : new Date().toLocaleString(),
            },
            {
                "By" : "Butch Cassidy",
                "Content" : "that's not true. getTime is an instance method of the Date object. That is, it works on the object itself, not the class. You can call it on any Date yo",
                "Timestamp" : new Date().toLocaleString(),
            },
        ],
        "Ratings": [4, 5, 4, 5]
    },
    {
        "Title": "The Future of Technology",
        "Author": "Liam Svensson",
        "Time": "2024-12-20",
        "Content": "Technology is evolving faster than ever. From AI advancements to breakthroughs in renewable energy, the next decade looks promising. I believe we’ll see a significant shift in how we interact with devices, especially with the rise of wearable tech and smart homes. Technology is evolving faster than ever. From AI advancements to breakthroughs in renewable energy, the next decade looks promising. I believe we’ll see a significant shift in how we interact with devices, especially with the rise of wearable tech and smart homes. Technology is evolving faster than ever. From AI advancements to breakthroughs in renewable energy, the next decade looks promising. I believe we’ll see a significant shift in how we interact with devices, especially with the rise of wearable tech and smart homes.",
        "Comments": [
            {
                "By": "Jane Doe",
                "Content": "This was a really insightful post! I learned a lot from it. Thanks for sharing!",
                "Timestamp": new Date().toLocaleString(),
            },
            {
                "By": "John Smith",
                "Content": "I have to disagree with some points, but overall it's a good read.",
                "Timestamp": new Date().toLocaleString(),
            },
            {
                "By": "Emily Carter",
                "Content": "Can you elaborate more on the section about healthy habits? I'd love more details.",
                "Timestamp": new Date().toLocaleString(),
            },
            {
                "By": "David Brown",
                "Content": "Great content! Looking forward to more posts like this. Keep up the good work!",
                "Timestamp": new Date().toLocaleString(),
            }
        ],
        "Ratings": [5, 3, 2, 2]

    },
    {
        "Title": "Healthy Living Tips",
        "Author": "Emma Johansson",
        "Time": "2025-01-10",
        "Content": `Living a healthy lifestyle doesn't have to be complicated. By making small, consistent changes, you can improve your overall well-being and energy levels. Here are some practical tips to get you started on your journey to a healthier you.

First and foremost, prioritize a balanced diet. Incorporate a variety of fruits, vegetables, whole grains, lean proteins, and healthy fats into your meals. Try to minimize processed foods and sugary drinks. Hydration is equally important—aim to drink at least eight glasses of water a day to keep your body functioning optimally.

Regular physical activity is another key component. You don't need to spend hours at the gym to stay active. Simple activities like brisk walking, cycling, or even dancing can make a difference. Aim for at least 30 minutes of moderate exercise most days of the week. Remember, consistency is more important than intensity.

Getting enough quality sleep is often overlooked but vital. Adults should strive for 7-9 hours of sleep each night. Create a calming bedtime routine, avoid screens before bed, and keep your sleep environment comfortable and dark.

Managing stress is crucial for both mental and physical health. Practices like meditation, deep breathing exercises, and journaling can help reduce stress levels. Don't hesitate to reach out to friends, family, or professionals if you're feeling overwhelmed.

Finally, make time for activities that bring you joy. Whether it's reading, gardening, or spending time with loved ones, doing things you love can significantly boost your mood and overall well-being.

Healthy living is about balance and making sustainable choices. Start with small steps, and over time, these positive habits will become a natural part of your daily life.
`,
        "Comments" : [],
        "Ratings": []
    },
    {
        "Title": "Travel Guide: Japan",
        "Author": "Noah Lindgren",
        "Time": "2025-01-28",
        "Content": "Japan is a traveler’s dream. From the bustling streets of Tokyo to the serene temples in Kyoto, there’s something for everyone. Don’t miss trying authentic ramen and visiting the cherry blossoms if you go during spring. Public transportation is top-notch and easy to navigate.",
        "Comments": [
            {
                "By": "Sophia Lee",
                "Content": "Absolutely loved this article. It was informative and easy to follow!",
                "Timestamp": new Date().toLocaleString(),
            },
            {
                "By": "Liam Johnson",
                "Content": "I think there's a small error in the third paragraph. Could you double-check it?",
                "Timestamp": new Date().toLocaleString(),
            },
            {
                "By": "Olivia Martinez",
                "Content": "This helped me understand the topic so much better. Thanks for breaking it down!",
                "Timestamp": new Date().toLocaleString(),
            },
            {
                "By": "William Davis",
                "Content": "Not sure I agree with the conclusion, but it’s a well-written piece.",
                "Timestamp": new Date().toLocaleString(),
            },
            {
                "By": "Isabella Wilson",
                "Content": "Fantastic read! I’ll definitely be applying some of these tips in my daily routine.",
                "Timestamp": new Date().toLocaleString(),
            }
        ],
        "Ratings": []

    },
    {
        "Title": "Creative Writing Hacks",
        "Author": "Olivia Berg",
        "Time": "2025-02-15",
        "Content": "Writer’s block can be frustrating, but there are ways to push through. I like to take short walks or jot down random thoughts without overthinking. Another tip: read more! Exploring different genres can spark fresh ideas and improve your writing style.",
        "Comments" : [],
        "Ratings": []
    },
    {
        "Title": "A Day in the Life of a Developer",
        "Author": "William Eriksson",
        "Time": "2025-02-20",
        "Content": "My mornings usually start with checking emails and reviewing code from the day before. I spend most of my time solving bugs and developing new features. Coffee breaks are essential! It’s challenging work, but there’s nothing more rewarding than seeing your code come to life.",
        "Comments" : [],
        "Ratings": []
    }
];

document.getElementById("createPost").addEventListener("mouseover", function(){
    this.textContent = "add_circle"
})

document.getElementById("createPost").addEventListener("mouseout", function(){
    this.textContent = "add_circle_outline"
})

document.getElementById("createPost").addEventListener("click", function(){
    document.getElementById("createPostContainer").classList.toggle("hidden")
    document.getElementById("dimmingOverlay").classList.toggle("hidden")
})

document.getElementById("dimmingOverlay").addEventListener("click", function(){
    document.getElementById("createPostContainer").classList.toggle("hidden")
    document.getElementById("dimmingOverlay").classList.toggle("hidden")
})

let container = document.getElementById("blog-posts")

// Function to add the content to an article
function fillContent(article, post, isExpanded = false) {
    article.innerHTML = ""; // Clear previous content
  
    const title = document.createElement("h2");
    const infoContainer = document.createElement("div");
    const author = document.createElement("p");
    const time = document.createElement("p");
    const content = document.createElement("p");
    const expandButton = document.createElement("button");
    const detailsContainer = document.createElement("div");
  
    article.className = "post";
    article.dataset.expanded = isExpanded;
  
    title.textContent = post.Title;
    title.className = "title";
  
    infoContainer.className = "infoContainer";
    author.textContent = post.Author;
    author.className = "author";
    time.textContent = post.Time;
    time.className = "time";
  
    // Check if content needs truncation
    const needsTruncation = post.Content.length > 400;

    content.textContent = isExpanded 
        ? post.Content 
        : needsTruncation 
            ? post.Content.substring(0, 200) + "..." 
            : post.Content;
    content.className = "content";

    // First append all the basic elements
    article.appendChild(title);
    infoContainer.appendChild(author);
    infoContainer.appendChild(time);
    article.appendChild(infoContainer);
    article.appendChild(content);

    // Add expand button if needed
    if (needsTruncation) {
        expandButton.className = "expand-button";
        expandButton.textContent = isExpanded ? "Show Less" : "Read More";
        article.appendChild(expandButton);
    }

    // Now append the detailsContainer to the article BEFORE calling fillDetails
    article.appendChild(detailsContainer);
    
    // Now call fillDetails which will have access to the parent element
    fillDetails(detailsContainer, post, false);
}

// Function to add rating and comments to the detailContainer
function fillDetails(detailsContainer, post, isExpanded = false) {
    const rating = document.createElement("div");
    const ratingValue = document.createElement("span");
    const ratingStars = document.createElement("div");
    const commentsDiv = document.createElement("div");
    
    // Calculate average rating
    const avgRating = post.Ratings.length 
        ? (post.Ratings.reduce((a, b) => a + b, 0) / post.Ratings.length).toFixed(1)
        : "No ratings";

    // Create star rating interface
    ratingStars.className = "rating-stars";
    for(let i = 1; i <= 5; i++) {
        const star = document.createElement("i");
        star.className = "material-icons";
        star.id = "rating-star"
        star.textContent = "star_outline";
        
        star.addEventListener("mouseover", () => {
            // Fill in stars up to the hovered one
            const stars = ratingStars.querySelectorAll('#rating-star');
            stars.forEach((s, index) => {
                s.textContent = index < i ? "star" : "star_outline";
            });
        });

        star.addEventListener("mouseout", () => {
            // Fill in stars up to the hovered one
            const stars = ratingStars.querySelectorAll('#rating-star');
            stars.forEach((s) => {
                s.textContent = "star_outline";
            });
        });

        star.addEventListener("click", (e) => {
            e.stopPropagation();
            post.Ratings.push(i);
            // Update the displayed rating
            ratingValue.textContent = `Rating: ${(post.Ratings.reduce((a, b) => a + b, 0) / post.Ratings.length).toFixed(1)} (${post.Ratings.length})`;
        });

        ratingStars.appendChild(star);
    }

    // Reset stars on mouse leave
    ratingStars.addEventListener("mouseleave", () => {
        const stars = ratingStars.querySelectorAll('.rating-star');
        stars.forEach(star => {
            star.textContent = "star_outline";
        });
    });

    rating.className = "rating";
    ratingValue.textContent = `Rating: ${avgRating} (${post.Ratings.length})`;
    rating.appendChild(ratingValue);
    rating.appendChild(ratingStars);
    
    commentsDiv.textContent = post.Comments.length + " Comments";
    commentsDiv.className = "comments";

    detailsContainer.className = "detailsContainer";
    detailsContainer.appendChild(rating);
    detailsContainer.appendChild(commentsDiv);

    // Create expandable comments section
    const commentsSection = document.createElement("div");
    commentsSection.className = "comments-section hidden";
    
    const addCommentContainer = document.createElement("form")
    addCommentContainer.className = "addCommentContainer"

    const commentTextarea = document.createElement("textarea")
    commentTextarea.className = "commentTextarea"
    commentTextarea.placeholder = "Add comment..."
    const addCommentButton = document.createElement("input")
    addCommentButton.type = "submit"
    addCommentButton.value = "Comment"
    addCommentButton.id = "addCommentButton"

    addCommentContainer.appendChild(commentTextarea)
    addCommentContainer.appendChild(addCommentButton)

    commentsSection.appendChild(addCommentContainer)

    addCommentContainer.addEventListener("submit", (e) => {
        e.preventDefault()
        e.stopPropagation()

        const commentContent = e.target.querySelector(".commentTextarea").value.trim()

        if (commentContent) {
            addComment(post, commentContent);
            e.target.reset();
        }
    })

    // Fill comments content
    post.Comments.forEach(comment => {
        const commentElement = document.createElement("div");
        commentElement.className = "comment";
        commentElement.innerHTML = `
            <p class="comment-author">${comment.By}</p>
            <p class="comment-content">${comment.Content}</p>
            <p class="comment-time">${comment.Timestamp}</p>
        `;
        commentsSection.appendChild(commentElement);
    });

    // Now detailsContainer will have a parent element
    detailsContainer.parentElement.insertBefore(commentsSection, detailsContainer.nextSibling);

    // Toggle comments visibility
    commentsDiv.addEventListener("click", (e) => {
        e.stopPropagation();
        commentsSection.classList.toggle("hidden");
        detailsContainer.classList.toggle("no-radius");  // Toggle a new class
        if (!commentsSection.classList.contains("hidden")) {
            detailsContainer.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
}

function renderPosts(){
    const oldContainer = document.getElementById("blog-posts");
    oldContainer.innerHTML = "";
    blogPosts.forEach((post, index) => {
        const article = document.createElement("article");
        fillContent(article, post, false);
        
        const articleDeleteButton = document.createElement("div");
        articleDeleteButton.id = "article-delete-button"
        article.appendChild(articleDeleteButton)

        const deleteButtonContainer = document.createElement("div");
        deleteButtonContainer.id = "delete-icon"
        
        
        // Create a div before to cover the boxshadow of the delete button
        const deleteButtonBefore = document.createElement("div");
        deleteButtonBefore.id = "delete-icon-before"
        deleteButtonContainer.appendChild(deleteButtonBefore);

        // Create delete button
        const deleteButton = document.createElement("i");
        deleteButton.className = "material-icons icon-with-shadow";
        deleteButton.id = "delete-icon-button"
        deleteButton.textContent = "delete";
        
        // Add click handler for delete
        deleteButton.addEventListener("click", (e) => {
            e.stopPropagation(); // Prevent article expansion
            if (confirm("Are you sure you want to delete this post?")) {
                blogPosts.splice(index, 1); // Remove the post from array
                renderPosts(); // Re-render the posts
            }
        });
        deleteButton.dataset.isOut = "false";
        deleteButtonContainer.appendChild(deleteButton);
        article.appendChild(deleteButtonContainer);

        // Only set up expansion logic if the post has a button (content > 400 chars)
        const expandButton = article.querySelector('.expand-button');
        if (expandButton) {
            const updateArticle = (expanded) => {
                // Remove delete buttons temporarily and save them
                const articleDeleteButton = article.querySelector("#article-delete-button");
                const deleteIconContainer = article.querySelector("#delete-icon");
                const wasOut = deleteIconContainer && deleteIconContainer.dataset.isOut === "true";
                
                if (articleDeleteButton) articleDeleteButton.remove();
                if (deleteIconContainer) deleteIconContainer.remove();
                
                // Update content
                fillContent(article, post, expanded);
                
                // Re-add the delete buttons at the end
                if (articleDeleteButton) article.appendChild(articleDeleteButton);
                if (deleteIconContainer) {
                    // Always set to not out when re-adding
                    deleteIconContainer.dataset.isOut = "false";
                    
                    // Remove any existing animation before re-adding
                    deleteIconContainer.style.animation = "";
                    
                    article.appendChild(deleteIconContainer);
                    
                    // Only play slide-in animation if it was out before
                    if (wasOut && (window.innerWidth > 480)) {
                        // Use setTimeout to ensure animation triggers after re-adding
                        setTimeout(() => {
                            deleteIconContainer.style.animation = "slideIn 0.5s forwards";
                        }, 0);
                        
                        // Reset border radius for even articles
                        if (article.matches("article:nth-child(even)") && articleDeleteButton) {
                            articleDeleteButton.style.borderRadius = "0 40px 0 40px";
                        }
                    }
                }
                
                // Re-add click listener to the expand button
                article.querySelector('.expand-button').addEventListener("click", (e) => {
                    e.stopPropagation();
                    updateArticle(!expanded);
                    article.scrollIntoView({ behavior: 'smooth', block: 'start' });
                });
            };
        
            // Initial click listener for the expand button
            expandButton.addEventListener("click", (e) => {
                e.stopPropagation();
                updateArticle(true);
                article.scrollIntoView({ behavior: 'smooth', block: 'start' });
            });
        }
        const deleteButtonSlider = article.querySelector("#delete-icon")
        const articleDeleteButtonElement = article.querySelector("#article-delete-button");

        articleDeleteButton.addEventListener("click", (e) => {
            e.stopPropagation();

            // Get current state from a data attribute (or create it with default "in" position)
            const isOut = deleteButtonSlider.dataset.isOut === "true";
            
            if (isOut) {
                // If it's out, slide it in
                deleteButtonSlider.style.animation = "slideIn 0.5s forwards";
                deleteButtonSlider.dataset.isOut = "false";
                if (article.matches("article:nth-child(even)") && articleDeleteButtonElement) {
                    articleDeleteButtonElement.style.borderRadius = "0 40px 0 40px";
                }
            } else {
                // If it's in, slide it out
                deleteButtonSlider.style.animation = "slideOut 0.5s forwards";
                deleteButtonSlider.dataset.isOut = "true";
                if (article.matches("article:nth-child(even)") && articleDeleteButtonElement) {
                    articleDeleteButtonElement.style.borderRadius = "0px 0px 0px 40px";
                }
            }
        })
        article.addEventListener("click", () => {
            const isOut = deleteButtonSlider.dataset.isOut === "true";
            if (isOut) {
                // If it's out, slide it in
                deleteButtonSlider.style.animation = "slideIn 0.5s forwards";
                deleteButtonSlider.dataset.isOut = "false";
                if (article.matches("article:nth-child(even)") && articleDeleteButtonElement) {
                    articleDeleteButtonElement.style.borderRadius = "0 40px 0 40px";
                }
            }
        })

        container.appendChild(article);
    });

    document.body.replaceChild(container, oldContainer);
}
renderPosts();

// Function to turn a string into standardized TitleCase
function toTitleCase(string) {
    const lowerWords = ["a", "an", "the", "and", "but", "or", "for", "nor", "on", "at", "to", "by", "of", "in"];
    return string
        .toLowerCase()
        .split(" ")
        .map((word, index) => (index === 0 || !lowerWords.includes(word)) 
        ? word.charAt(0).toUpperCase() + word.slice(1) 
        : word
        )
        .join(" ");
}

function addPost(title, content) {
    const newPost = {
      "Title": toTitleCase(title),
      "Content": content.charAt(0).toUpperCase() + content.slice(1),
      "Author": "Username Here",
      "Time": new Date().toLocaleDateString(),
      "Comments": [],
      "Ratings": []
    };
    blogPosts.unshift(newPost); // Add to the array
    renderPosts();              // Re-render posts

    return document.querySelector('article');
}

document.getElementById("createWrapper").addEventListener("submit", (e) => {
    e.preventDefault(); // Prevent page reload
  
    const title = document.getElementById("newTitle").value;
    const content = document.getElementById("newContent").value;
  
    if (title && content) {
      const newArticle = addPost(title, content); // Add new post
      e.target.reset();        // Clear the form
      document.getElementById("createPostContainer").classList.toggle("hidden")
      document.getElementById("dimmingOverlay").classList.toggle("hidden")
      newArticle.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    else {
        alert("Missing title or content")
    }
})

function addComment(post, commentContent) {
    const newComment = {
        "By": "Username Here",
        "Content": commentContent,
        "Timestamp": new Date().toLocaleString()
    }
    
    post.Comments.unshift(newComment);

    // Find the relevant article and update only its comments
    const articles = document.querySelectorAll('article');
    for (let article of articles) {
        if (article.querySelector('.title').textContent === post.Title) {
            // Update comment count
            const commentCount = article.querySelector('.comments');
            commentCount.textContent = post.Comments.length + " Comments";

            // Add the new comment to the comments section
            const commentsSection = article.querySelector('.comments-section');
            const commentElement = document.createElement("div");
            commentElement.className = "comment";
            commentElement.innerHTML = `
                <p class="comment-author">${newComment.By}</p>
                <p class="comment-content">${newComment.Content}</p>
                <p class="comment-time">${newComment.Timestamp}</p>
            `;
            
            // Insert the new comment before the comment form
            const commentForm = commentsSection.querySelector('.addCommentContainer');
            commentsSection.insertBefore(commentElement, commentForm.nextSibling);

            // Clear the form
            const form = article.querySelector('.addCommentContainer');
            form.reset();
            
            break;
        }
    }
}