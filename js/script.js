function showCountryModal() {
    Swal.fire({
        html: `
            <h1> نام کشور را وارد کنید </h1>
            <input id="swal-input2" class="swal2-input">
        `,
        customClass: {
            confirmButton: 'btn gradient-success',
        },
        buttonsStyling: false,
        confirmButtonText: 'افزودن',
        showClass: {
            popup: 'animate__animated animate__jackInTheBox'
        },
        hideClass: {
            popup: 'animate__animated animate__flipOutX'
        }
    }).then(() => {
        Swal.fire({
            title: 'اضافه شد',
            html: 'کشور مد نظر شما به لیست کشور های پشتیبانی شده اضافه شد',
            timer: 1500,
            timerProgressBar: true,
            willOpen: () => {
                Swal.showLoading()
                timerInterval = setInterval(() => {
                    const content = Swal.getContent()
                    if (content) {
                        const b = content.querySelector('b')
                        if (b) {
                            b.textContent = Swal.getTimerLeft()
                        }
                    }
                }, 100)
            },
            willClose: () => {
                clearInterval(timerInterval)
            },
            buttonsStyling: false,
            confirmButtonText: 'تایید',
            customClass: {
                confirmButton: 'btn gradient-primary',
            },
        })
    })
}

function showSuccessModal() {
    const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
            confirmButton: 'btn gradient-success',
        },
        buttonsStyling: false
    })

    swalWithBootstrapButtons.fire({
        title: 'روند افزایشی است !',
        text: "و تا به امروز +۱۵۰،۰۰۰ نفشه ثبت شده است !",
        icon: 'success',
        confirmButtonText: 'بستن',
        reverseButtons: true
    })
}

function modelNotif() {
    var toastMixin = Swal.mixin({
        toast: true,
        icon: 'success',
        title: 'General Title',
        position: 'bottom-left',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        showClass: {
            popup: 'animate__animated animate__bounceInUp'
        },
        hideClass: {
            popup: 'animate__animated animate__bounceOutLeft'
        }
    });

    toastMixin.fire({
        animation: true,
        title: 'هشتار اضافه شد'
    });
}

function loginFormDis(x, y) {
    document.getElementById('loginForm').style.display = 'flex';
    document.getElementById('signInForm').style.display = 'none';
    x.classList.replace('fb-1', 'fb-10')
    y.nextElementSibling.classList.replace('fb-10', 'fb-1')
}

function SignInFormDis(x, y) {
    document.getElementById('loginForm').style.display = 'none';
    document.getElementById('signInForm').style.display = 'flex';
    x.classList.replace('fb-1', 'fb-10')
    y.previousElementSibling.classList.replace('fb-10', 'fb-1')
}

function showAccountForm() {
    Swal.fire({
        html: `
            <div class="log-reg text-align-right ptb-2">
                <div class="d-flex c-gap-1">
                    <button class="btn gradient-info white-space fb-10" style="transition: all ease-in-out .5s" onclick="loginFormDis(this,this)"> ورود </button>
                    <button class="btn gradient-success white-space fb-1" style="transition: all ease-in-out .5s;" onclick="SignInFormDis(this,this)"> ثبت نام </button>
                </div>
                <div>
                    <form>

                        <div class="d-flex fd-column r-gap-3" id="loginForm">

                            <div class="form-group-item input-success input-text">
                                <input type="text" id="UserNameForLogin" placeholder="متن مورد نظر شما">
                                <label for="UserNameForLogin" class="input-label">نام کاربری</label>
                            </div>

                            <div class="form-group-item input-error input-text">
                                <input type="text" id="passwordForLogin" placeholder="متن مورد نظر شما" pattern="[0-9ا-ی]*">
                                <label for="passwordForLogin" class="input-label">رمز عبور</label>
                            </div>

                            <button class="btn gradient-primary"> ورود </button>
                        </div>

                        <div class="d-flex fd-column r-gap-3" id="signInForm">
                            <div class="form-group-item input-text">
                                <input type="text" id="nameAndLastNameForSignIn" placeholder="متن مورد نظر شما" pattern="[0-9ا-ی]*">
                                <label for="nameAndLastNameForSignIn" class="input-label">نام و نام خانوادگی</label>
                            </div>

                            <div class="form-group-item input-success input-text">
                                <input type="text" id="UserNameForSignIn" placeholder="متن مورد نظر شما">
                                <label for="UserNameForSignIn" class="input-label">نام کاربری</label>
                            </div>

                            <div class="form-group-item input-error input-text">
                                <input type="text" id="passwordForSignIn" placeholder="متن مورد نظر شما" pattern="[0-9ا-ی]*">
                                <label for="passwordForSignIn" class="input-label">رمز عبور</label>
                            </div>

                            <button class="btn gradient-primary"> ثبت نام </button>
                        </div>

                    </form>
                </div>
            </div>
        `,
        showConfirmButton: false,
        background: '#344675',
        backdrop: `rgba(44, 62, 80,0.5)`,
        showCloseButton: true,
    })
}

function showQuestionModal() {
    Swal.mixin({
        input: 'text',
        showCancelButton: true,
        progressSteps: ['۱', '۲', '۳'],
        background: '#344675',
        backdrop: `rgba(44, 62, 80,0.5)`,
        cancelButtonText: 'انصراف و حذف نظر',
        confirmButtonText: 'تایید و انتشار',
        buttonsStyling: false,
        customClass: {
            title: 'fn-size-8',
            confirmButton: 'btn gradient-success',
            cancelButton: 'btn gradient-danger',
            text: 'gray-200'
        }
    }).queue([{
            html: '<p class="text-color-grey-50">رمز عبور خود را وارد کنید :</p>'
        },
        {
            html: '<p class="text-color-grey-50">نام خود را وارد کنید</p>'
        },
        {
            html: '<p class="text-color-grey-50">نقش خود را انتخاب کنید</p>'
        },
    ]).then((result) => {
        if (result.value) {
            const answers = result.value
            Swal.fire({
                title: 'ممنون از شما !',
                icon: 'success',
                html: `
                    پاسخ های شما
                    <pre><code>رمز عبور : ${answers[0]}</code></pre>
                    <pre><code>نام شما : ${answers[1]}</code></pre>
                    <pre><code>نقش شما : ${answers[2]}</code></pre>
              `,
                confirmButtonText: 'تایید !',
                buttonsStyling: false,
                customClass: {
                    confirmButton: 'btn gradient-success'
                }
            })
        }
    })
}

function resNav() {
    Swal.fire({
        html: `
            <div class="d-flex c-gap-2 ai-center fd-column">
                <button class="btn gradient-primary b-xl w-10 mt-2" onclick="openIt()"> حساب کاربری </button>

                <div class="d-flex ai-center w-10 mt-1">
                    <input type="text" placeholder="جست جو ..." class="ptb-1 w-9">
                    <span class="search-icon fn-size-3">
                        <i class="fa fa-search"></i>
                    </span>
                </div>

                <div class="mt-3">
                    <span class="fn-size-6 mr-1 d-flex ai-center c-gap-2 cur-pointer" onclick="modelNotif()">
                        <i class="fa fa-heartbeat color-light-warning"></i>
                        <span class="fn-size-4 white"> افزودن یاد آور </span>
                    </span>
                </div>

            </div>
        `,
        showConfirmButton: false,
        background: '#344675',
        backdrop: `rgba(44, 62, 80,0.5)`,
        showCloseButton: true,
    })
}

// widget page script

function modelWidget1() {
    Swal.fire({
        title: 'این یک دیالوگ است !',
        icon: 'success',
        text: 'به راحتی میتوانید دیالوگ های زیبا بسازید',
        showClass: {
            popup: 'animate__anima ted animate__flipInX'
        },
        hideClass: {
            popup: 'animate__animated animate__lightSpeedOutLeft'
        },
        customClass: {
            confirmButton: 'btn gradient-success',
        },
        confirmButtonText: 'تایید',
        buttonsStyling: false,
    })
}

function modelWidget2() {
    Swal.fire({
        title: 'تصویر تصادفی !',
        text: 'با استفاده از وبسایت unsplash تصویر تصادفی نمایش دهید',
        imageUrl: 'https://unsplash.it/400/200',
        imageWidth: 400,
        imageHeight: 200,
        imageAlt: 'Custom image',
        customClass: {
            image: 'b-sm',
            confirmButton: 'btn gradient-default'
        },
        buttonsStyling: false,
        confirmButtonText: 'تایید',
        showCloseButton: true,
    })
}

function modelWidget3() {
    const { value: text } = Swal.fire({
        input: 'textarea',
        inputLabel: 'پیام مد نظر شما :',
        inputPlaceholder: 'نظر خود را بنویسید ...',
        inputAttributes: {
            'aria-label': 'Type your message here'
        },
        showCancelButton: true,
        buttonsStyling: false,
        cancelButtonText: 'لغو',
        confirmButtonText: 'تایید و ادامه',
        customClass: {
            input: 'resize-ver',
            confirmButton: 'btn gradient-success',
            cancelButton: 'btn gradient-danger',
        }
    }).then((result) => {
        if (result.isConfirmed) {
            swal.fire({
                title: 'آیا از ثبت نظر خود مطمئن هستید ؟',
                text: "این عملیات غیر قابل بازگشت خواهد بود !",
                icon: 'warning',
                showCancelButton: true,
                cancelButtonText: 'انصراف و حذف نظر',
                confirmButtonText: 'تایید و انتشار',
                reverseButtons: true,
                buttonsStyling: false,
                customClass: {
                    title: 'fn-size-8',
                    confirmButton: 'btn gradient-success',
                    cancelButton: 'btn gradient-danger',
                }
            })
        }
    })
}

function modelWidget4() {
    Swal.fire({
        title: 'با پس زمینه اختصاصی !',
        width: 400,
        padding: '3em',
        backdrop: 'rgba(0,0,123,0.4)',
        confirmButtonText: 'تایید ',
        buttonsStyling: false,
        customClass: {
            title: 'fn-size-8',
            confirmButton: 'btn gradient-success'
        }
    })
}

function slideOpen(imgUrlSlide) {
    Swal.fire({
        imageUrl: imgUrlSlide,
        imageAlt: 'Custom image',
        customClass: {
            image: 'b-sm mb-0 pb-0',
            confirmButton: 'btn gradient-primary w-10 m-0'
        },
        buttonsStyling: false,
        confirmButtonText: 'تایید',
        showCloseButton: true,
    })
}

function modelNotif() {
    var toastMixin = Swal.mixin({
        toast: true,
        icon: 'success',
        title: 'General Title',
        position: 'bottom-left',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        showClass: {
            popup: 'animate__animated animate__bounceInUp'
        },
        hideClass: {
            popup: 'animate__animated animate__bounceOutLeft'
        }
    });

    toastMixin.fire({
        animation: true,
        title: 'هشتار اضافه شد'
    });
}

function loginFormDis(x,y) {
    document.getElementById('loginForm').style.display = 'flex';
    document.getElementById('signInForm').style.display = 'none';
    x.classList.replace('fb-1', 'fb-10')
    y.nextElementSibling.classList.replace('fb-10', 'fb-1')
}

function SignInFormDis(x,y) {
    document.getElementById('loginForm').style.display = 'none';
    document.getElementById('signInForm').style.display = 'flex';
    x.classList.replace('fb-1', 'fb-10')
    y.previousElementSibling.classList.replace('fb-10', 'fb-1')
}

function showAccountForm() {
    Swal.fire({
        html: `
            <div class="log-reg text-align-right ptb-2">
                <div class="d-flex c-gap-1">
                    <button class="btn gradient-info white-space fb-10" style="transition: all ease-in-out .5s" onclick="loginFormDis(this,this)"> ورود </button>
                    <button class="btn gradient-success white-space fb-1" style="transition: all ease-in-out .5s;" onclick="SignInFormDis(this,this)"> ثبت نام </button>
                </div>
                <div>
                    <form>

                        <div class="d-flex fd-column r-gap-3" id="loginForm">

                            <div class="form-group-item input-success input-text">
                                <input type="text" id="UserNameForLogin" placeholder="متن مورد نظر شما">
                                <label for="UserNameForLogin" class="input-label">نام کاربری</label>
                            </div>

                            <div class="form-group-item input-error input-text">
                                <input type="text" id="passwordForLogin" placeholder="متن مورد نظر شما" pattern="[0-9ا-ی]*">
                                <label for="passwordForLogin" class="input-label">رمز عبور</label>
                            </div>

                            <button class="btn gradient-primary"> ورود </button>
                        </div>

                        <div class="d-flex fd-column r-gap-3" id="signInForm">
                            <div class="form-group-item input-text">
                                <input type="text" id="nameAndLastNameForSignIn" placeholder="متن مورد نظر شما" pattern="[0-9ا-ی]*">
                                <label for="nameAndLastNameForSignIn" class="input-label">نام و نام خانوادگی</label>
                            </div>

                            <div class="form-group-item input-success input-text">
                                <input type="text" id="UserNameForSignIn" placeholder="متن مورد نظر شما">
                                <label for="UserNameForSignIn" class="input-label">نام کاربری</label>
                            </div>

                            <div class="form-group-item input-error input-text">
                                <input type="text" id="passwordForSignIn" placeholder="متن مورد نظر شما" pattern="[0-9ا-ی]*">
                                <label for="passwordForSignIn" class="input-label">رمز عبور</label>
                            </div>

                            <button class="btn gradient-primary"> ثبت نام </button>
                        </div>

                    </form>
                </div>
            </div>
        `,
        showConfirmButton: false,
        background: '#344675',
        backdrop: `rgba(44, 62, 80,0.5)`,
        showCloseButton: true,
    })
}

function resNav() {
    Swal.fire({
        html: `
            <div class="d-flex c-gap-2 ai-center fd-column">
                <button class="btn gradient-primary b-xl w-10 mt-2" onclick="openIt()"> حساب کاربری </button>

                <div class="d-flex ai-center w-10 mt-1">
                    <input type="text" placeholder="جست جو ..." class="ptb-1 w-9">
                    <span class="search-icon fn-size-3">
                        <i class="fa fa-search"></i>
                    </span>
                </div>

                <div class="mt-3">
                    <span class="fn-size-6 mr-1 d-flex ai-center c-gap-2 cur-pointer" onclick="modelNotif()">
                        <i class="fa fa-heartbeat color-light-warning"></i>
                        <span class="fn-size-4 white"> افزودن یاد آور </span>
                    </span>
                </div>

            </div>
        `,
        showConfirmButton: false,
        background: '#344675',
        backdrop: `rgba(44, 62, 80,0.5)`,
        showCloseButton: true,
    })
}


// tooltips

tippy('.home', {
    content: "خانه",
});
tippy('.widget', {
    content: "ویجت ها",
});
tippy('.typography', {
    content: "تایپوگرافی",
});
tippy('.profile', {
    content: "پروفایل و فرم ها",
});
tippy('.timeline', {
    content: "فعالیت ها",
});


//  sidebar script

$(document).ready(function(){
    $("#close").click(function(){
        // 
        $(".menu-list").animate({
        left: '5px',
        width: '50px'
        });
    });
});